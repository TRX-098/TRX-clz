
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgprofile",
              alias: ["rpgprofile"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgprofile kategori rpg.",
              usage: ".rpgprofile <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const rpg = await readState("rpg.json"); const user = rpg[sender] || { level: 0, exp: 0, gold: 0 }; reply(`Profile RPG:\\nLevel: ${user.level}\\nExp: ${user.exp}\\nGold: ${user.gold}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
