
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "animeinfo",
              alias: ["animeinfo"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah animeinfo kategori anime.",
              usage: ".animeinfo <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const query = args.join(" ") || "Demon Slayer"; const data = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=1`).then(r => r.json()); const item = data.data?.[0]; reply(item ? `${item.title}\\nEpisodes: ${item.episodes}\\nScore: ${item.score}` : "Anime tidak ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
