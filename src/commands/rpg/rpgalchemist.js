
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgalchemist",
              alias: ["rpgalchemist"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgalchemist kategori rpg.",
              usage: ".rpgalchemist <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Alchemist meracik ramuan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
