
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "kerang72",
              alias: ["kerang72"],
              category: "kerangajaib",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah kerang72 kategori kerangajaib.",
              usage: ".kerang72 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah kerang72 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
