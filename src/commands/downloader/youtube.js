import ytdl from "play-dl";

export default {
  name: "ytdownload",
  alias: ["youtube", "yt"],
  category: "downloader",
  tier: "basic",
  cooldown: 20,
  limit: 5,
  description: "Download audio atau video YouTube sederhana",
  usage: ".ytdownload <url>",
  execute: async (m, { args, client }) => {
    const url = args[0];
    if (!url) {
      return client.sendMessage(m.key.remoteJid, { text: "Silakan kirim URL YouTube." });
    }
    const info = await ytdl.video_info(url);
    await client.sendMessage(m.key.remoteJid, { text: `Judul: ${info.video_details.title}\nDurasi: ${info.video_details.durationRaw}` });
  }
};
