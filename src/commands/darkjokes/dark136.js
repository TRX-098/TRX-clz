
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "dark136",
              alias: ["dark136"],
              category: "darkjokes",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah dark136 kategori darkjokes.",
              usage: ".dark136 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah dark136 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
