
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgpotion",
              alias: ["rpgpotion"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgpotion kategori rpg.",
              usage: ".rpgpotion <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Potion diminum.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
