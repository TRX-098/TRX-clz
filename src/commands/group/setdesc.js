
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "setdesc",
              alias: ["setdesc"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah setdesc kategori group.",
              usage: ".setdesc <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Masukkan deskripsi grup baru."); await toggleState("group-settings.json", m.key.remoteJid, { description: args.join(" ") }); reply(`Deskripsi grup diatur ke: ${args.join(" ")}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
