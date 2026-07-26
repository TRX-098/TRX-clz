
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "yts",
              alias: ["yts"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah yts kategori search.",
              usage: ".yts <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .yts <kata kunci>"); const query = args.join(" "); const html = await fetch(`https://api.allorigins.win/raw?url=https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`).then(r => r.text()); const ids = [...html.matchAll(/\\/watch\\?v=([\\w-]{11})/g)].map(m => m[1]); reply(ids.length ? ids.slice(0,3).map(id => `https://youtu.be/${id}`).join("\\n") : "Tidak ada hasil.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
