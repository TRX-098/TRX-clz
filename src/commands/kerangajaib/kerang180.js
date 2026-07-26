
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "kerang180",
              alias: ["kerang180"],
              category: "kerangajaib",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah kerang180 kategori kerangajaib.",
              usage: ".kerang180 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah kerang180 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
