
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "groupunlock",
              alias: ["groupunlock"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah groupunlock kategori group.",
              usage: ".groupunlock <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("group-settings.json", m.key.remoteJid, { locked: false }); reply("Grup dibuka kembali.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
