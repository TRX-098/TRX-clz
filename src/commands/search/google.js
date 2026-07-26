
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "google",
              alias: ["google"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah google kategori search.",
              usage: ".google <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .google <kata kunci>"); const query = args.join(" "); const data = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1`).then(r => r.json()); reply(data.Abstract || data.RelatedTopics?.[0]?.Text || "Tidak ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
