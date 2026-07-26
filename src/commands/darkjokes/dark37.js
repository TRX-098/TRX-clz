
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "dark37",
              alias: ["dark37"],
              category: "darkjokes",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah dark37 kategori darkjokes.",
              usage: ".dark37 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah dark37 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
