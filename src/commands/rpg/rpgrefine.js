
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgrefine",
              alias: ["rpgrefine"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgrefine kategori rpg.",
              usage: ".rpgrefine <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Refine item selesai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
