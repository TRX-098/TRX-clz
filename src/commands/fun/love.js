export default {
  name: "love",
  alias: ["cinta"],
  category: "fun",
  tier: "basic",
  cooldown: 20,
  limit: 10,
  description: "Quote cinta acak.",
  usage: ".love",
  execute: async (m, { client }) => {
    const quotes = [
      "Cinta sejati tumbuh dengan rasa percaya.",
      "Kasih sayang terbaik adalah ketika kamu selalu ada.",
      "Cinta bukan hanya kata-kata, tapi tindakan nyata.",
      "Jatuh cinta bukanlah pilihan, tapi merawatnya adalah." 
    ];
    await client.sendMessage(m.key.remoteJid, { text: quotes[Math.floor(Math.random() * quotes.length)] });
  }
};
