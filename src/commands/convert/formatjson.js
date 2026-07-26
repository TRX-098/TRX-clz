export default {
  name: "formatjson",
  alias: ["jsonformat"],
  category: "convert",
  tier: "basic",
  cooldown: 5,
  limit: 10,
  description: "Format JSON menjadi lebih mudah dibaca",
  usage: ".formatjson <json>",
  execute: async (m, { args, client }) => {
    const query = args.join(" ").trim();
    try {
      const parsed = JSON.parse(query);
      await client.sendMessage(m.key.remoteJid, { text: `
${JSON.stringify(parsed, null, 2)}
` });
    } catch (error) {
      await client.sendMessage(m.key.remoteJid, { text: "Format JSON tidak valid." });
    }
  }
};
