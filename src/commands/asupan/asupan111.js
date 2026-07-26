
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "asupan111",
              alias: ["asupan111"],
              category: "asupan",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah asupan111 kategori asupan.",
              usage: ".asupan111 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah asupan111 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
