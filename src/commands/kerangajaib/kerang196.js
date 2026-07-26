
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "kerang196",
              alias: ["kerang196"],
              category: "kerangajaib",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah kerang196 kategori kerangajaib.",
              usage: ".kerang196 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah kerang196 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
