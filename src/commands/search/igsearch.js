
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "igsearch",
              alias: ["igsearch"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah igsearch kategori search.",
              usage: ".igsearch <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .igsearch <username>"); const user = args[0]; const status = await fetch(`https://api.allorigins.win/raw?url=https://www.instagram.com/${encodeURIComponent(user)}/?__a=1`).then(r => r.text()); reply(status.length ? `Instagram ditemukan: ${user}` : "Tidak ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
