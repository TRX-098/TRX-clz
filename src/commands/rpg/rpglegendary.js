
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpglegendary",
              alias: ["rpglegendary"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpglegendary kategori rpg.",
              usage: ".rpglegendary <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Legendary item ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
