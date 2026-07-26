import AIService from "../../services/AIService.js";

export default {
  name: "summarize",
  alias: ["summary", "ringkas"],
  category: "ai",
  tier: "basic",
  cooldown: 20,
  limit: 10,
  description: "Ringkas teks dengan AI.",
  usage: ".summarize <teks>",
  execute: async (m, { args, client }) => {
    const text = args.join(" ");
    if (!text) return client.sendMessage(m.key.remoteJid, { text: "Silakan berikan teks untuk diringkas." });
    const service = new AIService();
    const summary = await service.summarize(text);
    await client.sendMessage(m.key.remoteJid, { text: summary || "Ringkasan gagal." });
  }
};
