
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "take",
              alias: ["take"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah take kategori sticker.",
              usage: ".take <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Metadata sticker diperbarui.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
