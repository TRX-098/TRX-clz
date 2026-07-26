import DownloaderService from "../../services/DownloaderService.js";

export default {
  name: "twitter",
  alias: ["twitter", "tw"],
  category: "downloader",
  tier: "basic",
  cooldown: 20,
  limit: 5,
  description: "Ambil halaman Twitter dari URL.",
  usage: ".twitter <url>",
  execute: async (m, { args, client }) => {
    const url = args[0];
    if (!url) return client.sendMessage(m.key.remoteJid, { text: "Silakan berikan URL Twitter." });
    const service = new DownloaderService();
    const result = await service.twitter(url);
    await client.sendMessage(m.key.remoteJid, { text: `Twitter page hasil diperoleh, panjang: ${result.html?.length || 0}` });
  }
};
