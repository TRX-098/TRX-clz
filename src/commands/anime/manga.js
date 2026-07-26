
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "manga",
              alias: ["manga"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah manga kategori anime.",
              usage: ".manga <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const query = args.join(" ") || "One Piece"; const data = await fetch(`https://api.jikan.moe/v4/manga?q=${encodeURIComponent(query)}&limit=1`).then(r => r.json()); const item = data.data?.[0]; reply(item ? `${item.title}\\n${item.synopsis?.slice(0,200)}...` : "Manga tidak ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
