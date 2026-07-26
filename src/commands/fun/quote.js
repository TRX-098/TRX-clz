export default {
  name: "quote",
  alias: ["quotes"],
  category: "fun",
  tier: "basic",
  cooldown: 20,
  limit: 10,
  description: "Ambil kutipan inspirasional.",
  usage: ".quote",
  execute: async (m, { client }) => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    await client.sendMessage(m.key.remoteJid, { text: `${data.content} — ${data.author}` });
  }
};
