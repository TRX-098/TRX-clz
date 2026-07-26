import AIService from "../../services/AIService.js";

export default {
  name: "aitranslate",
  alias: ["translateai", "aitr"],
  category: "ai",
  tier: "basic",
  cooldown: 15,
  limit: 10,
  description: "Terjemahkan teks dengan AI.",
  usage: ".aitranslate <teks>",
  execute: async (m, { args, client }) => {
    const text = args.join(" ");
    if (!text) return client.sendMessage(m.key.remoteJid, { text: "Silakan berikan teks untuk diterjemahkan." });
    const service = new AIService();
    const translated = await service.translate(text, "auto", "id");
    await client.sendMessage(m.key.remoteJid, { text: translated || "Terjemahan gagal." });
  }
};
