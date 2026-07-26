
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "zodiac",
              alias: ["zodiac"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah zodiac kategori search.",
              usage: ".zodiac <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const sign = args[0] || "aries"; reply(`Zodiac sign: ${sign}. Karakter umum: penuh semangat.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
