
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "searchanime",
              alias: ["searchanime"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah searchanime kategori anime.",
              usage: ".searchanime <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const query = args.join(" ") || "Attack on Titan"; const data = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=3`).then(r => r.json()); reply(data.data?.map(a => a.title).join("\\n") || "Tidak ada hasil.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
