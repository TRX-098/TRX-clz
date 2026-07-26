
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "animecharacter",
              alias: ["animecharacter"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah animecharacter kategori anime.",
              usage: ".animecharacter <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const query = args.join(" ") || "Goku"; const data = await fetch(`https://api.jikan.moe/v4/characters?q=${encodeURIComponent(query)}&limit=1`).then(r => r.json()); const item = data.data?.[0]; reply(item ? `${item.name}\\n${item.about?.slice(0,200)}...` : "Karakter tidak ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
