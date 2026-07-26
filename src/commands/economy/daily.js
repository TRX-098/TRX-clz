
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "daily",
              alias: ["daily"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah daily kategori economy.",
              usage: ".daily <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0, lastDaily: 0 }; const now = Date.now(); if (now - user.lastDaily < 86400000) return reply("Sudah klaim daily hari ini."); user.lastDaily = now; user.balance += 2000; econ[sender] = user; await writeState("economy.json", econ); reply(`Daily +2000. Saldo: ${user.balance}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
