
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "ttg",
              alias: ["ttg"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah ttg kategori sticker.",
              usage: ".ttg <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Teks ke GIF sedang diproses.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
