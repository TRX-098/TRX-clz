import AIService from "../../services/AIService.js";

export default {
  name: "vision",
  alias: ["vision", "imageaanalisis"],
  category: "ai",
  tier: "basic",
  cooldown: 25,
  limit: 5,
  description: "Analisis gambar menggunakan AI.",
  usage: ".vision <image_url> <pertanyaan>",
  execute: async (m, { args, client }) => {
    const [imageUrl, ...promptParts] = args;
    const prompt = promptParts.join(" ") || "Tolong analisis gambar ini.";
    if (!imageUrl) return client.sendMessage(m.key.remoteJid, { text: "Silakan sertakan URL gambar." });
    const buffer = await fetch(imageUrl).then((res) => res.arrayBuffer());
    const base64 = Buffer.from(buffer).toString("base64");
    const service = new AIService();
    const result = await service.vision(base64, prompt);
    const answer = result.choices?.[0]?.message?.content || "Tidak ada respon.";
    await client.sendMessage(m.key.remoteJid, { text: answer });
  }
};
