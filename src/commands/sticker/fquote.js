
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "fquote",
              alias: ["fquote"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah fquote kategori sticker.",
              usage: ".fquote <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const quote = randomPick(["Semangat untuk hari ini.", "Kesuksesan butuh proses."]); reply(`Quote: ${quote}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
