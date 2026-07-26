
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "reward",
              alias: ["reward"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah reward kategori economy.",
              usage: ".reward <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const reward = Math.floor(Math.random()*3000)+1000; const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0 }; user.balance += reward; econ[sender] = user; await writeState("economy.json", econ); reply(`Reward: ${reward}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
