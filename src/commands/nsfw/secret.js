export default {
  name: "nsfw",
  alias: ["adult"],
  category: "nsfw",
  tier: "premium",
  cooldown: 30,
  limit: 5,
  description: "Fitur NSFW dengan akses premium",
  usage: ".nsfw",
  execute: async (m, { client }) => {
    await client.sendMessage(m.key.remoteJid, { text: "Fitur NSFW hanya dapat diakses oleh user premium." });
  }
};
