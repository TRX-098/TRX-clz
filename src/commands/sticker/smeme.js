
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "smeme",
              alias: ["smeme"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah smeme kategori sticker.",
              usage: ".smeme <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Sticker meme dibuat.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
