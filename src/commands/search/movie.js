
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "movie",
              alias: ["movie"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah movie kategori search.",
              usage: ".movie <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .movie <judul>"); const term = args.join(" "); const html = await fetch(`https://api.allorigins.win/raw?url=https://www.imdb.com/find?q=${encodeURIComponent(term)}`).then(r => r.text()); const match = html.match(/href=\\"\\/title\\/tt(\\d+)[^\\"]+\\"[^>]*>([^<]+)<\\/a>/i); reply(match ? `${match[2]} \u2014 https://www.imdb.com/title/tt${match[1]}` : "Film tidak ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
