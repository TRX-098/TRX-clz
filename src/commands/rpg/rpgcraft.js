
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgcraft",
              alias: ["rpgcraft"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgcraft kategori rpg.",
              usage: ".rpgcraft <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Craft item RPG berhasil.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
