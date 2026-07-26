
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "emix",
              alias: ["emix"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah emix kategori sticker.",
              usage: ".emix <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Emoji mix selesai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
