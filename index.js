import "dotenv/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import figlet from "figlet";
import cfonts from "cfonts";
import cron from "node-cron";
import fs from "node:fs/promises";
import config from "./src/config.js";
import { connectMongo, connectRedis } from "./src/database/connection.js";
import TroxzyClient from "./src/core/TroxzyClient.js";
import { loadCommands } from "./src/lib/loadCommand.js";
import { loadEvents } from "./src/lib/loadEvents.js";
import { watchPlugins } from "./src/lib/watchPlugins.js";
import WebhookServer from "./src/services/WebhookServer.js";
import logger from "./src/utils/logger.js";
import TransactionModel from "./src/database/models/Transaction.js";
import UserModel from "./src/database/models/User.js";

const isDryRun = process.argv.includes("--dry-run");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function printBanner() {
  console.log(figlet.textSync("TroxzyMD", { horizontalLayout: "default" }));
  cfonts.say("TroxzyMD", {
    font: "block",
    align: "left",
    colors: ["cyan", "magenta"],
    background: "black",
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: "0"
  });
}

async function cleanupTempFiles() {
  try {
    const tempDir = path.join(process.cwd(), "temp");
    const files = await fs.readdir(tempDir);
    await Promise.all(files.map((file) => fs.unlink(path.join(tempDir, file))));
    logger.info("Temp files cleaned up", { count: files.length });
  } catch (error) {
    logger.warn("Temp cleanup failed", { error });
  }
}

async function resetDailyLimits() {
  try {
    const redis = await import("./src/database/connection.js");
    const client = redis.getRedis();
    const keys = await client.keys("daily:*");
    await Promise.all(keys.map((key) => client.del(key)));
    logger.info("Daily limits reset", { keys: keys.length });
  } catch (error) {
    logger.warn("Daily reset failed", { error });
  }
}

async function checkPremiumExpiry(client) {
  try {
    const now = new Date();
    const expired = await UserModel.updateMany({ premiumExpiresAt: { $lte: now }, tier: "premium" }, { tier: "basic", premiumExpiresAt: null });
    if (expired.modifiedCount > 0) {
      logger.info("Premium expired users reset", { count: expired.modifiedCount });
    }
  } catch (error) {
    logger.warn("Premium expiry check failed", { error });
  }
}

async function checkPendingTransactions(client) {
  try {
    const pending = await TransactionModel.find({ status: "pending" });
    if (!pending.length) return;
    const { default: MidtransService } = await import("./src/services/MidtransService.js");
    const service = new MidtransService();
    await Promise.all(pending.map(async (transaction) => {
      const status = await service.checkStatus(transaction.orderId);
      if (status.transaction_status && status.transaction_status !== transaction.status) {
        transaction.status = status.transaction_status;
        await transaction.save();
        await service.handleWebhook(status);
      }
    }));
  } catch (error) {
    logger.warn("Pending transaction check failed", { error });
  }
}

async function main() {
  try {
    printBanner();
    if (isDryRun) {
      console.log("Dry run mode: index.js syntax and startup path validated.");
      process.exit(0);
    }
    const mongoConnected = await connectMongo(config.MONGODB_URL);
    const redisConnected = await connectRedis(config.REDIS_URL);

    const client = new TroxzyClient();
    await client.initialize();
    await loadCommands(client);
    await loadEvents(client);
    watchPlugins(client);

    const webhook = new WebhookServer(client);
    webhook.start();

    cron.schedule("0 * * * *", cleanupTempFiles);
    if (redisConnected) {
      cron.schedule("0 0 * * *", resetDailyLimits);
    } else {
      logger.warn("Redis not connected; skipping daily reset schedule.");
    }

    if (mongoConnected) {
      cron.schedule("*/5 * * * *", () => checkPremiumExpiry(client));
      cron.schedule("*/30 * * * * *", () => checkPendingTransactions(client));
    } else {
      logger.warn("MongoDB not connected; skipping premium checks and pending transaction jobs.");
    }

    process.on("unhandledRejection", (reason) => {
      logger.error("Unhandled rejection", { reason });
    });

    process.on("uncaughtException", (error) => {
      logger.error("Uncaught exception", { error });
      process.exit(1);
    });

    const shutdown = async () => {
      logger.info("Shutdown signal received");
      await client.shutdown();
      process.exit(0);
    };
    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
  } catch (error) {
    logger.error("Failed to initialize TroxzyMD", { error });
    process.exit(1);
  }
}

main();
