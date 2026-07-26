
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "ownergrup",
              alias: ["ownergrup"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah ownergrup kategori group.",
              usage: ".ownergrup <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply(`Pemilik grup: ${m.key.remoteJid.split("@")[0]}@s.whatsapp.net`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
