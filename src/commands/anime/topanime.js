
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "topanime",
              alias: ["topanime"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah topanime kategori anime.",
              usage: ".topanime <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const data = await fetch(`https://api.jikan.moe/v4/top/anime?limit=3`).then(r => r.json()); reply(data.data?.map(a => `${a.rank}. ${a.title}`).join("\\n") || "Tidak ada data.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
