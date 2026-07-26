
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "kiblat",
              alias: ["kiblat"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah kiblat kategori Islamic.",
              usage: ".kiblat <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Arah kiblat: 293\xb0 dari lokasi Anda.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
