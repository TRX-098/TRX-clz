
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "dark109",
              alias: ["dark109"],
              category: "darkjokes",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah dark109 kategori darkjokes.",
              usage: ".dark109 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah dark109 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
