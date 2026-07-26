
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "dark73",
              alias: ["dark73"],
              category: "darkjokes",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah dark73 kategori darkjokes.",
              usage: ".dark73 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah dark73 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
