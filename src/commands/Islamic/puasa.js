
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "puasa",
              alias: ["puasa"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah puasa kategori Islamic.",
              usage: ".puasa <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Informasi puasa: niat untuk Allah.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
