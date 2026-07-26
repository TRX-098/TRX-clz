
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgupgrade",
              alias: ["rpgupgrade"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgupgrade kategori rpg.",
              usage: ".rpgupgrade <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Upgrade item selesai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
