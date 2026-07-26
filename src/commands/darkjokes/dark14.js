
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "dark14",
              alias: ["dark14"],
              category: "darkjokes",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah dark14 kategori darkjokes.",
              usage: ".dark14 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah dark14 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
