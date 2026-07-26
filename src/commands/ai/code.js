import AIService from "../../services/AIService.js";

export default {
  name: "aicode",
  alias: ["codeai", "generatecode"],
  category: "ai",
  tier: "basic",
  cooldown: 30,
  limit: 5,
  description: "Generate code dengan AI.",
  usage: ".aicode <bahasa> <deskripsi>",
  execute: async (m, { args, client }) => {
    const language = args.shift();
    const prompt = args.join(" ");
    if (!language || !prompt) return client.sendMessage(m.key.remoteJid, { text: "Gunakan .aicode <bahasa> <deskripsi>" });
    const service = new AIService();
    const response = await service.codeGenerate(language, prompt);
    const answer = response.choices?.[0]?.message?.content || "Gagal menghasilkan kode.";
    await client.sendMessage(m.key.remoteJid, { text: answer });
  }
};
