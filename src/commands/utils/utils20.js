
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "utils20",
              alias: ["utils20"],
              category: "utils",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah utils20 kategori utils.",
              usage: ".utils20 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah utils20 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
