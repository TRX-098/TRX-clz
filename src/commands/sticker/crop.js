
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "crop",
              alias: ["crop"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah crop kategori sticker.",
              usage: ".crop <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Crop sticker selesai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
