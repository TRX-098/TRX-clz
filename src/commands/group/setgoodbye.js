
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "setgoodbye",
              alias: ["setgoodbye"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah setgoodbye kategori group.",
              usage: ".setgoodbye <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Masukkan teks goodbye baru."); await toggleState("group-settings.json", m.key.remoteJid, { goodbyeMessage: args.join(" ") }); reply("Goodbye message disimpan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
