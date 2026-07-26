
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgboss",
              alias: ["rpgboss"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgboss kategori rpg.",
              usage: ".rpgboss <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Boss battle dimulai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
