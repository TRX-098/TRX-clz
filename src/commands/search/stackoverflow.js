
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "stackoverflow",
              alias: ["stackoverflow"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah stackoverflow kategori search.",
              usage: ".stackoverflow <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .stackoverflow <query>"); const items = await fetch(`https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&site=stackoverflow&q=${encodeURIComponent(args.join(" "))}`).then(r => r.json()); reply(items.items?.slice(0,3).map(i => `${i.title} - ${i.link}`).join("\\n\\n") || "Tidak ada hasil StackOverflow.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
