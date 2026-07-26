
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "wikipedia",
              alias: ["wikipedia"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah wikipedia kategori search.",
              usage: ".wikipedia <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .wikipedia <kata kunci>"); const term = args.join(" "); const res = await fetch(`https://id.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`); if (!res.ok) return reply("Halaman tidak ditemukan."); const data = await res.json(); reply(`${data.title}\\n${data.extract}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
