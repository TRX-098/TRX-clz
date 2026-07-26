import DownloaderService from "../../services/DownloaderService.js";

export default {
  name: "tiktok",
  alias: ["tiktok", "tt"],
  category: "downloader",
  tier: "basic",
  cooldown: 20,
  limit: 5,
  description: "Download metadata TikTok dari URL.",
  usage: ".tiktok <url>",
  execute: async (m, { args, client }) => {
    const url = args[0];
    if (!url) return client.sendMessage(m.key.remoteJid, { text: "Silakan berikan URL TikTok." });
    const service = new DownloaderService();
    const data = await service.tiktok(url);
    await client.sendMessage(m.key.remoteJid, { text: `TikTok download info:
Status: ${data.status || "unknown"}
Message: ${data.message || "OK"}` });
  }
};
