import { DisconnectReason } from "@whiskeysockets/baileys";
import logger from "../utils/logger.js";

export default async function connectionUpdate({ update, client }) {
  const { connection, lastDisconnect } = update;
  logger.info("Connection update", { connection });
  if (connection === "close") {
    const statusCode = lastDisconnect?.error?.output?.statusCode;
    if (statusCode === DisconnectReason.loggedOut) {
      logger.warn("Logged out, removing auth file and exiting...");
      process.exit(0);
    }
  }
  if (connection === "open") {
    logger.info("WhatsApp connection established");
  }
}
