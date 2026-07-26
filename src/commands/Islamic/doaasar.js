
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "doaasar",
              alias: ["doaasar"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah doaasar kategori Islamic.",
              usage: ".doaasar <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Doa asar: Ya Allah, ampuni kami.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
