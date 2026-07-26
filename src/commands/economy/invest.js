
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "invest",
              alias: ["invest"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah invest kategori economy.",
              usage: ".invest <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const gain = Math.floor(Math.random()*8000)-2000; const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0 }; user.balance += gain; econ[sender] = user; await writeState("economy.json", econ); reply(`Investasi menghasilkan ${gain}.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
