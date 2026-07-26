
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "antispam",
              alias: ["antispam"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah antispam kategori group.",
              usage: ".antispam <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("group-settings.json", m.key.remoteJid, { antispam: true }); reply("Anti-spam aktif.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
