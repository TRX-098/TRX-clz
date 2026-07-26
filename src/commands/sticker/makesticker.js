export default {
  name: "sticker",
  alias: ["stiker"],
  category: "sticker",
  tier: "basic",
  cooldown: 10,
  limit: 10,
  description: "Buat stiker dari gambar atau video" ,
  usage: ".sticker (reply gambar)",
  execute: async (m, { client }) => {
    await client.sendMessage(m.key.remoteJid, { text: "Kirim gambar atau video dengan caption .sticker untuk membuat stiker." });
  }
};
