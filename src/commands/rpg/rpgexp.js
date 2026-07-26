
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgexp",
              alias: ["rpgexp"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgexp kategori rpg.",
              usage: ".rpgexp <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const rpg = await readState("rpg.json"); const user = rpg[sender] || { level: 1, exp: 0 }; user.exp = (user.exp||0) + Math.floor(Math.random()*20)+10; if (user.exp >= 100) { user.exp -= 100; user.level = (user.level||1)+1; } rpg[sender] = user; await writeState("rpg.json", rpg); reply(`Exp bertambah. Level: ${user.level}, Exp: ${user.exp}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
