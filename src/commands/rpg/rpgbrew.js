
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgbrew",
              alias: ["rpgbrew"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgbrew kategori rpg.",
              usage: ".rpgbrew <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Brew potion RPG selesai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
