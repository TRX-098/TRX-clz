
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "utils173",
              alias: ["utils173"],
              category: "utils",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah utils173 kategori utils.",
              usage: ".utils173 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah utils173 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
