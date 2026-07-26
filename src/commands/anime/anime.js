
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "anime",
              alias: ["anime"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah anime kategori anime.",
              usage: ".anime <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const query = args.join(" ") || "Naruto"; const data = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=1`).then(r => r.json()); const item = data.data?.[0]; reply(item ? `${item.title}\\n${item.synopsis?.slice(0,200)}...` : "Anime tidak ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
