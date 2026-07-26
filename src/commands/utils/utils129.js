
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "utils129",
              alias: ["utils129"],
              category: "utils",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah utils129 kategori utils.",
              usage: ".utils129 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah utils129 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
