
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgdungeon",
              alias: ["rpgdungeon"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgdungeon kategori rpg.",
              usage: ".rpgdungeon <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Dungeon exploration selesai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
