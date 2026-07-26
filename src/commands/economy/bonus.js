
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "bonus",
              alias: ["bonus"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah bonus kategori economy.",
              usage: ".bonus <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const bonus = Math.floor(Math.random()*2000)+500; const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0 }; user.balance += bonus; econ[sender] = user; await writeState("economy.json", econ); reply(`Bonus: ${bonus}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
