import { checkPermission, formatPermissionError } from "../../middleware/permissionCheck.js";

export default {
  name: "reload",
  alias: ["reloadcmd"],
  category: "owner",
  tier: "owner",
  cooldown: 15,
  limit: 0,
  description: "Muat ulang perintah bot",
  usage: ".reload",
  execute: async (m, { client, sender }) => {
    if (!await checkPermission(sender, "owner")) {
      return client.sendMessage(m.key.remoteJid, { text: formatPermissionError("owner") });
    }
    const { reloadCommands } = await import("../../lib/loadCommand.js");
    await reloadCommands(client);
    await client.sendMessage(m.key.remoteJid, { text: "Perintah bot berhasil dimuat ulang." });
  }
};
