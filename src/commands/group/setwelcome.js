
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "setwelcome",
              alias: ["setwelcome"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah setwelcome kategori group.",
              usage: ".setwelcome <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Masukkan teks welcome baru."); await toggleState("group-settings.json", m.key.remoteJid, { welcomeMessage: args.join(" ") }); reply("Welcome message disimpan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
