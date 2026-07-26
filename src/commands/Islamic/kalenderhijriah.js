
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "kalenderhijriah",
              alias: ["kalenderhijriah"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah kalenderhijriah kategori Islamic.",
              usage: ".kalenderhijriah <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Tanggal Hijriah: 12 Rabiul Awal 1448.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
