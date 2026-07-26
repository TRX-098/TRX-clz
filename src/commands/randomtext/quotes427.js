
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "quotes427",
              alias: ["quotes427"],
              category: "randomtext",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah quotes427 kategori randomtext.",
              usage: ".quotes427 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah quotes427 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
