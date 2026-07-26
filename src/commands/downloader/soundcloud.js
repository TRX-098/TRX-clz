import DownloaderService from "../../services/DownloaderService.js";

export default {
  name: "soundcloud",
  alias: ["soundcloud", "sc"],
  category: "downloader",
  tier: "basic",
  cooldown: 20,
  limit: 5,
  description: "Ambil halaman SoundCloud dari URL.",
  usage: ".soundcloud <url>",
  execute: async (m, { args, client }) => {
    const url = args[0];
    if (!url) return client.sendMessage(m.key.remoteJid, { text: "Silakan berikan URL SoundCloud." });
    const service = new DownloaderService();
    const result = await service.soundcloud(url);
    await client.sendMessage(m.key.remoteJid, { text: `SoundCloud hasil diperoleh, teks panjang: ${result.text?.length || 0}` });
  }
};
