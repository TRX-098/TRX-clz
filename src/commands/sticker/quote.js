
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "quote",
              alias: ["quote"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah quote kategori sticker.",
              usage: ".quote <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const quote = randomPick(["Hidup adalah perjalanan.", "Jangan takut gagal."]); reply(quote);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
