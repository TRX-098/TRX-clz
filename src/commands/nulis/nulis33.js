
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "nulis33",
              alias: ["nulis33"],
              category: "nulis",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah nulis33 kategori nulis.",
              usage: ".nulis33 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah nulis33 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
