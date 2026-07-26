
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "toimg",
              alias: ["toimg"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah toimg kategori sticker.",
              usage: ".toimg <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Konversi sticker ke gambar dimulai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
