
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "news",
              alias: ["news"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah news kategori search.",
              usage: ".news <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .news <kata kunci>"); const keyword = args.join(" "); const html = await fetch(`https://api.allorigins.win/raw?url=https://news.google.com/search?q=${encodeURIComponent(keyword)}`).then(r => r.text()); const match = html.match(/<a[^>]+href=\\"\\.\\/articles\\/([^\\"]+)\\"[^>]*>([^<]+)<\\/a>/i); reply(match ? match[2] : "Berita tidak ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
