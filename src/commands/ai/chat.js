import AIService from "../../services/AIService.js";

export default {
  name: "aichat",
  alias: ["chatgpt", "ai"],
  category: "ai",
  tier: "basic",
  cooldown: 15,
  limit: 10,
  description: "Chat dengan AI TroxzyMD",
  usage: ".aichat <pertanyaan>",
  execute: async (m, { args, client }) => {
    const prompt = args.join(" ").trim();
    if (!prompt) {
      return client.sendMessage(m.key.remoteJid, { text: "Silakan berikan pertanyaan." });
    }
    const service = new AIService();
    const result = await service.chat([{ role: "user", content: prompt }]);
    const answer = result?.choices?.[0]?.message?.content || "Maaf, AI tidak merespon.";
    await client.sendMessage(m.key.remoteJid, { text: answer });
  }
};
