
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "weekly",
              alias: ["weekly"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah weekly kategori economy.",
              usage: ".weekly <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0, lastWeekly: 0 }; const now = Date.now(); if (now - user.lastWeekly < 604800000) return reply("Sudah klaim weekly."); user.lastWeekly = now; user.balance += 10000; econ[sender] = user; await writeState("economy.json", econ); reply(`Weekly +10000. Saldo: ${user.balance}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
