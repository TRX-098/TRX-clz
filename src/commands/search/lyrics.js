
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "lyrics",
              alias: ["lyrics"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah lyrics kategori search.",
              usage: ".lyrics <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (args.length < 2) return reply("Gunakan .lyrics <artist> <judul>"); const artist = args.shift(); const title = args.join(" "); const data = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`).then(r => r.json()); reply(data.lyrics?.slice(0, 1000) || "Lirik tidak ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
