import DownloaderService from "../../services/DownloaderService.js";

export default {
  name: "facebook",
  alias: ["facebook", "fb"],
  category: "downloader",
  tier: "basic",
  cooldown: 20,
  limit: 5,
  description: "Ambil halaman Facebook dari URL.",
  usage: ".facebook <url>",
  execute: async (m, { args, client }) => {
    const url = args[0];
    if (!url) return client.sendMessage(m.key.remoteJid, { text: "Silakan berikan URL Facebook." });
    const service = new DownloaderService();
    const result = await service.facebook(url);
    await client.sendMessage(m.key.remoteJid, { text: `Facebook page hasil diperoleh, panjang: ${result.html?.length || 0}` });
  }
};
