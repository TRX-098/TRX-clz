
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "swm",
              alias: ["swm"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah swm kategori sticker.",
              usage: ".swm <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Sticker watermark disetel.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
