
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "transfer",
              alias: ["transfer"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah transfer kategori economy.",
              usage: ".transfer <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const amount = Number(args[0]); const target = args[1]; if (!amount || !target) return reply("Gunakan .transfer <nominal> <user>"); const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0 }; if (user.balance < amount) return reply("Saldo tidak cukup."); const receiver = econ[target] || { balance: 0 }; user.balance -= amount; receiver.balance += amount; econ[sender] = user; econ[target] = receiver; await writeState("economy.json", econ); reply(`Transfer ${amount} ke ${target} berhasil.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
