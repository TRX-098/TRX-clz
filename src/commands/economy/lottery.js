
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "lottery",
              alias: ["lottery"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah lottery kategori economy.",
              usage: ".lottery <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const ticket = Math.floor(Math.random()*100); const win = ticket > 90 ? 50000 : 0; const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0 }; user.balance += win; econ[sender] = user; await writeState("economy.json", econ); reply(win ? `Menang lottery ${win}!` : `Ticket ${ticket}. Tidak menang.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
