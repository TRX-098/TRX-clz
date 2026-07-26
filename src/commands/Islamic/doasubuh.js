
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "doasubuh",
              alias: ["doasubuh"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah doasubuh kategori Islamic.",
              usage: ".doasubuh <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Doa subuh: Ya Allah, jadikan hari ini berkah.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
