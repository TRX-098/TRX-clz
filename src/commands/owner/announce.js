import { checkPermission, formatPermissionError } from "../../middleware/permissionCheck.js";

export default {
  name: "announce",
  alias: ["broadcastowner"],
  category: "owner",
  tier: "owner",
  cooldown: 10,
  limit: 0,
  description: "Kirim pengumuman singkat dari owner",
  usage: ".announce <pesan>",
  execute: async (m, { args, client, sender }) => {
    if (!await checkPermission(sender, "owner")) {
      return client.sendMessage(m.key.remoteJid, { text: formatPermissionError("owner") });
    }
    const message = args.join(" ").trim();
    if (!message) {
      return client.sendMessage(m.key.remoteJid, { text: "Gunakan .announce <pesan>" });
    }
    await client.sendMessage(m.key.remoteJid, { text: `Pengumuman telah dikirim:\n${message}` });
  }
};
