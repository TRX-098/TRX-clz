import AIService from "../../services/AIService.js";

export default {
  name: "aitts",
  alias: ["ttsai", "texttospeech"],
  category: "ai",
  tier: "basic",
  cooldown: 30,
  limit: 5,
  description: "Ubah teks menjadi suara AI.",
  usage: ".aitts <teks>",
  execute: async (m, { args, client }) => {
    const text = args.join(" ");
    if (!text) return client.sendMessage(m.key.remoteJid, { text: "Silakan berikan teks untuk TTS." });
    const service = new AIService();
    const buffer = await service.tts(text);
    await client.sendMessage(m.key.remoteJid, { text: `TTS audio diterima. Ukuran: ${buffer.length} bytes.` });
  }
};
