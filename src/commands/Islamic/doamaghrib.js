
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "doamaghrib",
              alias: ["doamaghrib"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah doamaghrib kategori Islamic.",
              usage: ".doamaghrib <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Doa maghrib: Terima kasih untuk nikmat hari ini.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
