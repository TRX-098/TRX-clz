
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "carbon",
              alias: ["carbon"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah carbon kategori sticker.",
              usage: ".carbon <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply(`Carbon image id: ${computeHash(text || "carbon").slice(0, 8)}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
