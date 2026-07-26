
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "fun88",
              alias: ["fun88"],
              category: "fun",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah fun88 kategori fun.",
              usage: ".fun88 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah fun88 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
