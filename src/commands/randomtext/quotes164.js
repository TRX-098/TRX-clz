
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "quotes164",
              alias: ["quotes164"],
              category: "randomtext",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah quotes164 kategori randomtext.",
              usage: ".quotes164 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah quotes164 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
