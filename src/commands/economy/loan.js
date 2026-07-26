
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "loan",
              alias: ["loan"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah loan kategori economy.",
              usage: ".loan <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const amount = Number(args[0]); if (!amount) return reply("Gunakan .loan <nominal>"); const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0, loan: 0 }; user.loan = (user.loan||0)+amount; econ[sender] = user; await writeState("economy.json", econ); reply(`Pinjaman ${amount} dicatat.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
