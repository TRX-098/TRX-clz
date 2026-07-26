
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "work",
              alias: ["work"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah work kategori economy.",
              usage: ".work <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const jobs = ["Programmer","Desainer","Penulis","Kurir"]; const job = randomPick(jobs); const amount = Math.floor(Math.random()*5000)+1500; const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0 }; user.balance += amount; econ[sender] = user; await writeState("economy.json", econ); reply(`Kerja sebagai ${job}, dapat ${amount}. Saldo: ${user.balance}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
