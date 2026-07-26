import dotenv from "dotenv";
dotenv.config();

const config = {
  BOT_NAME: process.env.BOT_NAME || "TroxzyMD",
  OWNER_NAME: process.env.OWNER_NAME || "Trozzy",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "6281410528015",
  TELEGRAM_OWNER: process.env.TELEGRAM_OWNER || "t.me/SoloBanNoTrash",
  BOT_NUMBER: process.env.BOT_NUMBER || "",
  AI_BASE_URL: process.env.AI_BASE_URL || "https://api.freetheai.xyz/v1",
  AI_API_KEY: process.env.AI_API_KEY || "",
  MIDTRANS_CLIENT_KEY: process.env.MIDTRANS_CLIENT_KEY || "",
  MIDTRANS_SERVER_KEY: process.env.MIDTRANS_SERVER_KEY || "",
  MONGODB_URL: process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/troxzymd",
  REDIS_URL: process.env.REDIS_URL || "redis://127.0.0.1:6379",
  WEBHOOK_PORT: parseInt(process.env.WEBHOOK_PORT, 10) || 7777,
  NODE_ENV: process.env.NODE_ENV || "production",
  TIMEZONE: process.env.TIMEZONE || "Asia/Jakarta",
  PREFIX: process.env.PREFIX || ".",
  SESSION_SECRET: process.env.SESSION_SECRET || process.env.OWNER_NUMBER || "troxzy-secret"
};

export default config;
