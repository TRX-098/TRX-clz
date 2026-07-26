
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rob",
              alias: ["rob"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rob kategori economy.",
              usage: ".rob <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const target = args[0]; if (!target) return reply("Gunakan .rob <user>"); const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0 }; const victim = econ[target] || { balance: 0 }; const amount = Math.floor(Math.random()*1000); if (victim.balance < amount) return reply("Target tidak cukup saldo."); victim.balance -= amount; user.balance += amount; econ[sender] = user; econ[target] = victim; await writeState("economy.json", econ); reply(`Rob berhasil: ${amount}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
