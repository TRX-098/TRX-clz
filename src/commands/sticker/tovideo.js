
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "tovideo",
              alias: ["tovideo"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah tovideo kategori sticker.",
              usage: ".tovideo <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Konversi sticker ke video dimulai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
