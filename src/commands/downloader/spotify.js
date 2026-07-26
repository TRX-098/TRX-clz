import DownloaderService from "../../services/DownloaderService.js";

export default {
  name: "spotify",
  alias: ["spotify", "sp"],
  category: "downloader",
  tier: "basic",
  cooldown: 20,
  limit: 5,
  description: "Ambil konten Spotify dari URL.",
  usage: ".spotify <url>",
  execute: async (m, { args, client }) => {
    const url = args[0];
    if (!url) return client.sendMessage(m.key.remoteJid, { text: "Silakan berikan URL Spotify." });
    const service = new DownloaderService();
    const result = await service.spotify(url);
    await client.sendMessage(m.key.remoteJid, { text: `Spotify hasil diperoleh, teks panjang: ${result.text?.length || 0}` });
  }
};
