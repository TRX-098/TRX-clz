
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "trade",
              alias: ["trade"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah trade kategori economy.",
              usage: ".trade <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Trade request diproses.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
