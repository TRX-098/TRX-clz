export default {
  name: "meme",
  alias: ["memes"],
  category: "fun",
  tier: "basic",
  cooldown: 30,
  limit: 10,
  description: "Ambil meme acak dari internet.",
  usage: ".meme",
  execute: async (m, { client }) => {
    const res = await fetch("https://meme-api.com/gimme");
    const data = await res.json();
    await client.sendMessage(m.key.remoteJid, { text: `${data.title}
${data.url}` });
  }
};
