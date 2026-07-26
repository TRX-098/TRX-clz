
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "asupan113",
              alias: ["asupan113"],
              category: "asupan",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah asupan113 kategori asupan.",
              usage: ".asupan113 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah asupan113 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
