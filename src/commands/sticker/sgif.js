
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "sgif",
              alias: ["sgif"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah sgif kategori sticker.",
              usage: ".sgif <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Sticker GIF sedang dibuat.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
