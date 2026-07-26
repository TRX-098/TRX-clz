
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "searchmanga",
              alias: ["searchmanga"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah searchmanga kategori anime.",
              usage: ".searchmanga <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const query = args.join(" ") || "One Piece"; const data = await fetch(`https://api.jikan.moe/v4/manga?q=${encodeURIComponent(query)}&limit=3`).then(r => r.json()); reply(data.data?.map(a => a.title).join("\\n") || "Tidak ada hasil.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
