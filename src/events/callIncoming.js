import logger from "../utils/logger.js";

export default async function callIncoming({ call, client }) {
  try {
    const caller = call.from;
    await client.sendMessage(caller, { text: "Panggilan tidak didukung. Silakan kirim pesan." });
  } catch (error) {
    logger.error("Incoming call handling failed", { error });
  }
}
