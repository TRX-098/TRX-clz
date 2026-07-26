export default {
  name: "anonymous",
  alias: ["anon"],
  category: "anonymous",
  tier: "basic",
  cooldown: 20,
  limit: 5,
  description: "Masuk ke mode chat anonim sederhana",
  usage: ".anonymous",
  execute: async (m, { client }) => {
    await client.sendMessage(m.key.remoteJid, { text: "Mode anonim belum diimplementasikan sepenuhnya. Silakan gunakan chat normal." });
  }
};
