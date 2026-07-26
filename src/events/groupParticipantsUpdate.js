import logger from "../utils/logger.js";

export default async function groupParticipantsUpdate({ data, client }) {
  try {
    const { participants, action } = data;
    for (const participant of participants) {
      if (action === "add") {
        await client.sendMessage(data.id, { text: `Selamat datang @${participant.split("@")[0]}!` }, { quoted: null });
      }
      if (action === "remove") {
        await client.sendMessage(data.id, { text: `Sampai jumpa @${participant.split("@")[0]}!` });
      }
    }
  } catch (error) {
    logger.error("Group participant event failed", { error });
  }
}
