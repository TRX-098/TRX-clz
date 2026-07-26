
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "seasonal",
              alias: ["seasonal"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah seasonal kategori anime.",
              usage: ".seasonal <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const data = await fetch(`https://api.jikan.moe/v4/seasons/now`).then(r => r.json()); reply(data.data?.slice(0,3).map(a => a.title).join("\\n") || "Tidak ada data.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
