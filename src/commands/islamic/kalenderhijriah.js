
            import fetch from "node-fetch";
import { randomPick, formatJson, getBuffer, computeHash, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "kalenderhijriah",
              alias: ["kalenderhijriah"],
              category: "islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah kalenderhijriah untuk kategori islamic.",
              usage: ".kalenderhijriah <parameter>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Tanggal Hijriah: 12 Rabiul Awal 1448.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
