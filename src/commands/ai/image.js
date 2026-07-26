import AIService from "../../services/AIService.js";

export default {
  name: "image",
  alias: ["img", "generateimage"],
  category: "ai",
  tier: "basic",
  cooldown: 20,
  limit: 5,
  description: "Generate image menggunakan AI.",
  usage: ".image <prompt>",
  execute: async (m, { args, client }) => {
    const prompt = args.join(" ");
    if (!prompt) return client.sendMessage(m.key.remoteJid, { text: "Silakan berikan prompt gambar." });
    const service = new AIService();
    const result = await service.generateImage(prompt);
    const imageUrl = result.data?.[0]?.url || "Tidak dapat menghasilkan gambar.";
    await client.sendMessage(m.key.remoteJid, { text: `Image URL: ${imageUrl}` });
  }
};
