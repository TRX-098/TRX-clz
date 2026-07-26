
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "tgcf",
              alias: ["tgcf"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah tgcf kategori sticker.",
              usage: ".tgcf <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Sticker TGCF siap.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
