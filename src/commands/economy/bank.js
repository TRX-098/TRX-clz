
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "bank",
              alias: ["bank"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah bank kategori economy.",
              usage: ".bank <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0, bank: 0 }; reply(`Saldo: ${user.balance} | Bank: ${user.bank || 0}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
