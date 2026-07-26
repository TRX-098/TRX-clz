
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgstart",
              alias: ["rpgstart"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgstart kategori rpg.",
              usage: ".rpgstart <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const rpg = await readState("rpg.json"); rpg[sender] = { level: 1, exp: 0, hp: 100, gold: 100, class: "Novice", inventory: [] }; await writeState("rpg.json", rpg); reply("RPG dimulai. Profile dibuat.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
