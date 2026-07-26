export default {
  name: "tebakangka",
  alias: ["guessnumber"],
  category: "fun",
  tier: "basic",
  cooldown: 20,
  limit: 10,
  description: "Permainan tebak angka sederhana.",
  usage: ".tebakangka",
  execute: async (m, { client }) => {
    const number = Math.floor(Math.random() * 100) + 1;
    await client.sendMessage(m.key.remoteJid, { text: `Tebak angka antara 1 sampai 100. Angka rahasia: ${number}` });
  }
};
