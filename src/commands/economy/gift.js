
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "gift",
              alias: ["gift"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah gift kategori economy.",
              usage: ".gift <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const target = args[0]; const amount = Number(args[1]); if (!target || !amount) return reply("Gunakan .gift <user> <nominal>"); const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0 }; if (user.balance < amount) return reply("Saldo tidak cukup."); const receiver = econ[target] || { balance: 0 }; user.balance -= amount; receiver.balance += amount; econ[sender] = user; econ[target] = receiver; await writeState("economy.json", econ); reply(`Gift ${amount} ke ${target}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
