import DownloaderService from "../../services/DownloaderService.js";

export default {
  name: "instagram",
  alias: ["instagram", "ig"],
  category: "downloader",
  tier: "basic",
  cooldown: 20,
  limit: 5,
  description: "Ambil metadata Instagram dari URL.",
  usage: ".instagram <url>",
  execute: async (m, { args, client }) => {
    const url = args[0];
    if (!url) return client.sendMessage(m.key.remoteJid, { text: "Silakan berikan URL Instagram." });
    const service = new DownloaderService();
    const result = await service.instagram(url);
    await client.sendMessage(m.key.remoteJid, { text: `Instagram page hasil diperoleh, panjang: ${result.html?.length || 0}` });
  }
};
