
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "monthly",
              alias: ["monthly"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah monthly kategori economy.",
              usage: ".monthly <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0, lastMonthly: 0 }; const now = Date.now(); if (now - user.lastMonthly < 2592000000) return reply("Sudah klaim monthly."); user.lastMonthly = now; user.balance += 30000; econ[sender] = user; await writeState("economy.json", econ); reply(`Monthly +30000. Saldo: ${user.balance}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
