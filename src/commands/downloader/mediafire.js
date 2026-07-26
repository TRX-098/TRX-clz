import DownloaderService from "../../services/DownloaderService.js";

export default {
  name: "mediafire",
  alias: ["mediafire", "mf"],
  category: "downloader",
  tier: "basic",
  cooldown: 20,
  limit: 5,
  description: "Ambil halaman MediaFire dari URL.",
  usage: ".mediafire <url>",
  execute: async (m, { args, client }) => {
    const url = args[0];
    if (!url) return client.sendMessage(m.key.remoteJid, { text: "Silakan berikan URL MediaFire." });
    const service = new DownloaderService();
    const result = await service.mediafire(url);
    await client.sendMessage(m.key.remoteJid, { text: `MediaFire hasil diperoleh, panjang: ${result.html?.length || 0}` });
  }
};
