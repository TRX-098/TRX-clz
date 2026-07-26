export default {
  name: "animerekomendasi",
  alias: ["animerec"],
  category: "anime",
  tier: "basic",
  cooldown: 10,
  limit: 10,
  description: "Rekomendasi anime acak",
  usage: ".animerekomendasi",
  execute: async (m, { client }) => {
    const anime = ["Naruto", "One Piece", "Demon Slayer", "Attack on Titan", "Jujutsu Kaisen"];
    const pick = anime[Math.floor(Math.random() * anime.length)];
    await client.sendMessage(m.key.remoteJid, { text: `Rekomendasi anime: ${pick}` });
  }
};
