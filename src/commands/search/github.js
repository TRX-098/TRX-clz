
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "github",
              alias: ["github"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah github kategori search.",
              usage: ".github <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .github <query>"); const items = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(args.join(" "))}&per_page=3`).then(r => r.json()); reply(items.items?.map(i => `${i.full_name}: ${i.html_url}`).join("\\n\\n") || "Tidak ada hasil GitHub.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
