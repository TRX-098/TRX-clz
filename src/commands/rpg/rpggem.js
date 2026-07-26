
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpggem",
              alias: ["rpggem"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpggem kategori rpg.",
              usage: ".rpggem <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Gem baru ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
