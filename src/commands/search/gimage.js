
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "gimage",
              alias: ["gimage"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah gimage kategori search.",
              usage: ".gimage <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .gimage <kata kunci>"); const query = args.join(" "); const html = await fetch(`https://api.allorigins.win/raw?url=https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`).then(r => r.text()); const match = html.match(/src=\\"(https:\\/\\/[^\\"]+\\.(?:jpg|png|gif))/i); reply(match ? match[1] : "Gambar tidak ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
