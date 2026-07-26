
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpglevel",
              alias: ["rpglevel"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpglevel kategori rpg.",
              usage: ".rpglevel <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const rpg = await readState("rpg.json"); const user = rpg[sender] || { level: 0 }; reply(`Level Anda: ${user.level}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
