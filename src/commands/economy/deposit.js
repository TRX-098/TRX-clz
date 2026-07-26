
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "deposit",
              alias: ["deposit"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah deposit kategori economy.",
              usage: ".deposit <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const amount = Number(args[0]); if (!amount) return reply("Gunakan .deposit <nominal>"); const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0, bank: 0 }; if (user.balance < amount) return reply("Saldo tidak cukup."); user.balance -= amount; user.bank = (user.bank||0)+amount; econ[sender] = user; await writeState("economy.json", econ); reply(`Deposit ${amount} ke bank.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
