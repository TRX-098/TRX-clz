import UserModel from "../../database/models/User.js";

export default {
  name: "premiumstatus",
  alias: ["statuspremium", "prem"],
  category: "premium",
  tier: "basic",
  cooldown: 10,
  limit: 5,
  description: "Cek status Premium Anda",
  usage: ".premiumstatus",
  execute: async (m, { client, sender }) => {
    const user = await UserModel.findOne({ jid: sender });
    if (!user || user.tier !== "premium") {
      return client.sendMessage(m.key.remoteJid, { text: "Anda belum berstatus Premium." });
    }
    const expiresAt = user.premiumExpiresAt ? new Date(user.premiumExpiresAt).toLocaleString("id-ID") : "Tidak ditentukan";
    await client.sendMessage(m.key.remoteJid, { text: `Status Premium: aktif\nBerakhir: ${expiresAt}` });
  }
};
