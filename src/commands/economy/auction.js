
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "auction",
              alias: ["auction"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah auction kategori economy.",
              usage: ".auction <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Auction dibuat. Kirim penawaran.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
