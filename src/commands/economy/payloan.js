
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "payloan",
              alias: ["payloan"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah payloan kategori economy.",
              usage: ".payloan <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const amount = Number(args[0]); if (!amount) return reply("Gunakan .payloan <nominal>"); const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0, loan: 0 }; if (user.balance < amount) return reply("Saldo tidak cukup."); user.balance -= amount; user.loan = Math.max(0, (user.loan||0)-amount); econ[sender] = user; await writeState("economy.json", econ); reply(`Bayar pinjaman ${amount}. Sisa: ${user.loan}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
