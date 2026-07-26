
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "asupan149",
              alias: ["asupan149"],
              category: "asupan",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah asupan149 kategori asupan.",
              usage: ".asupan149 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah asupan149 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
