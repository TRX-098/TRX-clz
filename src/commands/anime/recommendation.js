
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "recommendation",
              alias: ["recommendation"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah recommendation kategori anime.",
              usage: ".recommendation <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const data = await fetch(`https://api.jikan.moe/v4/recommendations/anime?limit=3`).then(r => r.json()); reply(data.data?.map(r => r.entry[0].title).join("\\n") || "Tidak ada rekomendasi.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
