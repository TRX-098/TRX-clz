
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgmarket",
              alias: ["rpgmarket"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgmarket kategori rpg.",
              usage: ".rpgmarket <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("RPG market ditampilkan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
