export default {
  name: "groupinfo",
  alias: ["ginfo"],
  category: "group",
  tier: "basic",
  cooldown: 5,
  limit: 10,
  description: "Tampilkan info grup saat ini",
  usage: ".groupinfo",
  execute: async (m, { client }) => {
    const jid = m.key.remoteJid;
    const reply = `Info grup:\nJID: ${jid}`;
    await client.sendMessage(jid, { text: reply });
  }
};
