
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "utils26",
              alias: ["utils26"],
              category: "utils",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah utils26 kategori utils.",
              usage: ".utils26 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah utils26 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
