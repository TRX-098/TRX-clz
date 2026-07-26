
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "ttp",
              alias: ["ttp"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah ttp kategori sticker.",
              usage: ".ttp <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("TTP sticker disiapkan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
