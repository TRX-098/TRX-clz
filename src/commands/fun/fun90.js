
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "fun90",
              alias: ["fun90"],
              category: "fun",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah fun90 kategori fun.",
              usage: ".fun90 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah fun90 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
