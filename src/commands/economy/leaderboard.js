
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "leaderboard",
              alias: ["leaderboard"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah leaderboard kategori economy.",
              usage: ".leaderboard <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const econ = await readState("economy.json"); const top = Object.entries(econ).sort((a,b) => (b[1].balance||0)-(a[1].balance||0)).slice(0,5); reply(`Leaderboard:\\n${top.map(([u,v]) => `${u}: ${v.balance||0}`).join("\\n")}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
