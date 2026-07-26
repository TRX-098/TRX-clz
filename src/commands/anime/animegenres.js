
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "animegenres",
              alias: ["animegenres"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah animegenres kategori anime.",
              usage: ".animegenres <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const data = await fetch(`https://api.jikan.moe/v4/genres/anime`).then(r => r.json()); reply(data.data?.slice(0,5).map(g => g.name).join("\\n") || "Genre tidak tersedia.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
