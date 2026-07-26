
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "tafsir",
              alias: ["tafsir"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah tafsir kategori Islamic.",
              usage: ".tafsir <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Tafsir singkat: Doa, kesabaran, dan tawakkal.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
