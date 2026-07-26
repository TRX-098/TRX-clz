export default {
  name: "slot",
  alias: ["slots"],
  category: "fun",
  tier: "basic",
  cooldown: 20,
  limit: 10,
  description: "Main slot sederhana.",
  usage: ".slot",
  execute: async (m, { client }) => {
    const items = ["🍒","🍋","🍉","⭐","7️⃣","🍇"];
    const rolls = [items[Math.floor(Math.random() * items.length)], items[Math.floor(Math.random() * items.length)], items[Math.floor(Math.random() * items.length)]];
    await client.sendMessage(m.key.remoteJid, { text: `🎰 | ${rolls.join(" |")} |
${rolls[0] === rolls[1] && rolls[1] === rolls[2] ? "JACKPOT!" : "Coba lagi."}` });
  }
};
