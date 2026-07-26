import config from "../config.js";
import { tidyText } from "../utils/formatter.js";
import logger from "../utils/logger.js";
import { parseMessage } from "../lib/loadCommand.js";
import { ensureUser, isAllowed, checkCooldown, setCooldown } from "../utils/commandUtils.js";

export default async function messageUpsert({ upsert, client }) {
  try {
    const messages = upsert.messages;
    if (!messages || !messages.length) return;
    const m = messages[0];
    if (!m.message) return;
    const isGroup = m.key.remoteJid?.endsWith("@g.us");
    const sender = m.key.participant || m.key.remoteJid;
    const text = tidyText(m.message?.conversation || m.message?.extendedTextMessage?.text || "");
    if (!text.startsWith(config.PREFIX)) return;

    const raw = text.slice(config.PREFIX.length).trim();
    const [commandText, ...args] = raw.split(/\s+/);
    const { command } = await parseMessage(commandText.toLowerCase());
    if (!command) {
      await client.sendMessage(m.key.remoteJid, { text: `Command tidak ditemukan: ${commandText}` });
      return;
    }

    const user = await ensureUser(sender);
    if (!await isAllowed(command, user)) {
      await client.sendMessage(m.key.remoteJid, { text: `Akses ditolak. Tier diperlukan: ${command.tier}` });
      return;
    }

    const remaining = await checkCooldown(sender, command);
    if (remaining > 0) {
      await client.sendMessage(m.key.remoteJid, { text: `Tunggu ${remaining}s sebelum menggunakan ${command.name} lagi.` });
      return;
    }

    await setCooldown(sender, command);
    const reply = async (message) => {
      return client.sendMessage(m.key.remoteJid, { text: message });
    };

    await command.execute(m, {
      args,
      client,
      command,
      text: raw,
      prefix: config.PREFIX,
      isOwner: user.tier === "owner",
      isAdmin: ["admin", "owner"].includes(user.tier),
      isPremium: ["premium", "admin", "owner"].includes(user.tier),
      isGroup,
      pushname: m.pushName || "",
      participants: null,
      metadata: null,
      quoted: m.message?.extendedTextMessage?.contextInfo?.quotedMessage || null,
      mime: Object.keys(m.message)[0],
      msg: m.message,
      sender,
      senderNumber: sender.replace(/@.+$/, ""),
      groupMetadata: null,
      botNumber: config.BOT_NUMBER,
      users: null,
      group: null,
      store: null,
      isCmd: true,
      reply
    });
  } catch (error) {
    logger.error("Message handler failed", { error });
  }
}
