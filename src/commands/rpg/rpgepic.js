
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgepic",
              alias: ["rpgepic"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgepic kategori rpg.",
              usage: ".rpgepic <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Epic item ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
