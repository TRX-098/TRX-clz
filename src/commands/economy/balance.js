
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "balance",
              alias: ["balance"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah balance kategori economy.",
              usage: ".balance <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0 }; reply(`Saldo: ${user.balance}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
