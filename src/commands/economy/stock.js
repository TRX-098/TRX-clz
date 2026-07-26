
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "stock",
              alias: ["stock"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah stock kategori economy.",
              usage: ".stock <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const price = (Math.random()*1000+100).toFixed(2); reply(`Harga saham: $${price}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
