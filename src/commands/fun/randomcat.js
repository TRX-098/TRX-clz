export default {
  name: "randomcat",
  alias: ["cat"],
  category: "fun",
  tier: "basic",
  cooldown: 15,
  limit: 15,
  description: "Kirim foto kucing acak.",
  usage: ".randomcat",
  execute: async (m, { client }) => {
    const res = await fetch("https://aws.random.cat/meow");
    const data = await res.json();
    await client.sendMessage(m.key.remoteJid, { text: `Kucing acak: ${data.file}` });
  }
};
