
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "beg",
              alias: ["beg"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah beg kategori economy.",
              usage: ".beg <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const amount = Math.floor(Math.random()*500); const econ = await readState("economy.json"); const user = econ[sender] || { balance: 0 }; user.balance += amount; econ[sender] = user; await writeState("economy.json", econ); reply(`Hasil ngemis: ${amount}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
