
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "npm",
              alias: ["npm"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah npm kategori search.",
              usage: ".npm <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .npm <query>"); const data = await fetch(`https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(args.join(" "))}&size=3`).then(r => r.json()); reply(data.objects?.map(o => `${o.package.name}: ${o.package.links.npm}`).join("\\n\\n") || "Tidak ada paket.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
