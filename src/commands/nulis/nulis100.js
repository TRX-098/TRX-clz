
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "nulis100",
              alias: ["nulis100"],
              category: "nulis",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah nulis100 kategori nulis.",
              usage: ".nulis100 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah nulis100 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
