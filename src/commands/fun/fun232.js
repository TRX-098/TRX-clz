
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "fun232",
              alias: ["fun232"],
              category: "fun",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah fun232 kategori fun.",
              usage: ".fun232 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah fun232 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
