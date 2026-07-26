import path from "node:path";
import { fileURLToPath } from "node:url";
import qrcode from "qrcode-terminal";
import {
  makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  delay,
  fetchLatestBaileysVersion,
  Browsers,
  makeCacheableSignalKeyStore
} from "@whiskeysockets/baileys";
import config from "../config.js";
import logger from "../utils/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class TroxzyClient {
  constructor() {
    this.client = null;
    this.auth = null;
    this.reconnectAttempts = 0;
    this.queue = Promise.resolve();
    this.groupMetadata = new Map();
    this.callBlocklist = new Set();
  }

  async initialize() {
    const { state, saveCreds } = await useMultiFileAuthState("./sessions");
    this.auth = { state, saveCreds };
    const { version } = await fetchLatestBaileysVersion();

    this.client = makeWASocket({
      version,
      auth: this.auth.state,
      logger,
      browser: Browsers.macOS("TroxzyMD"),
      printQRInTerminal: false,
      generateHighQualityLinkPreview: true,
      markOnlineOnConnect: false,
      getMessage: async () => ({})
    });

    this.client.ev.on("creds.update", this.auth.saveCreds);
    this.client.ev.on("connection.update", this.handleConnectionUpdate.bind(this));
    this.client.ev.on("messages.upsert", this.handleMessagesUpsert.bind(this));
    this.client.ev.on("group-participants.update", this.handleGroupParticipants.bind(this));
    this.client.ev.on("call.incoming", this.handleCallIncoming.bind(this));
    this.client.ev.on("message.deletion", async (msg) => {
      // keep message history if needed
      logger.info("Message deleted", { msg });
    });

    logger.info("TroxzyClient initialized");
  }

  async handleConnectionUpdate(update) {
    try {
      const { connection, lastDisconnect, qr } = update;
      if (qr) {
        qrcode.generate(qr, { small: true });
        logger.info("QR code generated in terminal");
      }

      if (connection === "connecting") {
        logger.info("Connecting to WhatsApp...");
      }
      if (connection === "open") {
        logger.info("WhatsApp connection is open");
        this.reconnectAttempts = 0;
      }
      if (connection === "close") {
        const statusCode = lastDisconnect?.error?.output?.statusCode;
        logger.warn("WhatsApp connection closed", { statusCode });
        if (statusCode !== DisconnectReason.loggedOut) {
          this.scheduleReconnect();
        }
      }
    } catch (error) {
      logger.error("Connection update failed", { error });
    }
  }

  scheduleReconnect() {
    const delayMs = Math.min(30000, 1000 * 2 ** this.reconnectAttempts);
    this.reconnectAttempts += 1;
    logger.info(`Reconnecting in ${delayMs}ms`);
    setTimeout(async () => {
      if (this.client) {
        try {
          await this.client.logout();
        } catch {
          // ignore
        }
        await this.initialize();
      }
    }, delayMs);
  }

  async handleMessagesUpsert(upsert) {
    try {
      if (!upsert.messages?.length) return;
      for (const msg of upsert.messages) {
        const isGroup = msg.key.remoteJid?.endsWith("@g.us");
        if (!msg.message) continue;
        const sender = msg.key.participant || msg.key.remoteJid;
        const shouldAutoRead = sender && msg.key.fromMe === false;
        if (shouldAutoRead) {
          try {
            await this.client.readMessages([msg.key]);
          } catch {
            // ignore
          }
        }
      }
      const handler = (await import("../events/messageUpsert.js")).default;
      await handler({ upsert, client: this });
    } catch (error) {
      logger.error("Message upsert handler failed", { error });
    }
  }

  async handleGroupParticipants(update) {
    try {
      const handler = (await import("../events/groupParticipantsUpdate.js")).default;
      await handler({ data: update, client: this });
    } catch (error) {
      logger.error("Group participants handler failed", { error });
    }
  }

  async handleCallIncoming(call) {
    try {
      const caller = call[0]?.from;
      if (!caller) return;
      if (this.callBlocklist.has(caller)) return;
      await this.client.rejectCall(caller);
      await this.client.sendMessage(caller, { text: "Panggilan ditolak. Silakan gunakan chat." });
      this.callBlocklist.add(caller);
    } catch (error) {
      logger.error("Incoming call handler failed", { error });
    }
  }

  queueMessage(jid, message) {
    this.queue = this.queue.then(async () => {
      const delayMs = 500 + Math.floor(Math.random() * 1500);
      await delay(delayMs);
      return this.sendMessage(jid, message);
    });
    return this.queue;
  }

  async sendMessage(jid, message) {
    if (!this.client) throw new Error("WhatsApp client not initialized");
    return await this.client.sendMessage(jid, message);
  }

  async sendPresence(jid, type) {
    if (!this.client) return;
    try {
      await this.client.presenceSubscribe(jid);
      await this.client.sendPresenceUpdate(type, jid);
    } catch (error) {
      logger.warn("Presence update failed", { error });
    }
  }

  async getGroupMetadata(jid) {
    if (this.groupMetadata.has(jid)) return this.groupMetadata.get(jid);
    const result = await this.client.groupMetadata(jid);
    this.groupMetadata.set(jid, result);
    return result;
  }

  async shutdown() {
    try {
      if (this.client) {
        await this.client.logout();
      }
    } catch (error) {
      logger.warn("Error during shutdown", { error });
    }
  }
}

export default TroxzyClient;
