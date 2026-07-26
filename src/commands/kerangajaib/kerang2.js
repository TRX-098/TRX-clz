
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "kerang2",
              alias: ["kerang2"],
              category: "kerangajaib",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah kerang2 kategori kerangajaib.",
              usage: ".kerang2 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah kerang2 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
