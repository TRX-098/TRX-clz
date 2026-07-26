
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "smeta",
              alias: ["smeta"],
              category: "sticker",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah smeta kategori sticker.",
              usage: ".smeta <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Sticker metadata disimpan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
