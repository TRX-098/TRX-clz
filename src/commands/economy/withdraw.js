
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "withdraw",
              alias: ["withdraw"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah withdraw kategori economy.",
              usage: ".withdraw <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const amount = Number(args[0]); if (!amount) return reply("Gunakan .withdraw <nominal>"); const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0, bank: 0 }; if ((user.bank||0) < amount) return reply("Bank tidak cukup."); user.bank -= amount; user.balance += amount; econ[sender] = user; await writeState("economy.json", econ); reply(`Withdraw ${amount} berhasil.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
