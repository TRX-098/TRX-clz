
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "reddit",
              alias: ["reddit"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah reddit kategori search.",
              usage: ".reddit <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .reddit <topik>"); const items = await fetch(`https://www.reddit.com/search.json?q=${encodeURIComponent(args.join(" "))}&limit=3`).then(r => r.json()); reply(items.data?.children?.map(c => c.data.title).join("\\n\\n") || "Tidak ada hasil Reddit.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
