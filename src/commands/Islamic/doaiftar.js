
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "doaiftar",
              alias: ["doaiftar"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah doaiftar kategori Islamic.",
              usage: ".doaiftar <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Doa iftar: Allahumma laka sumtu wa bika aamantu...");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
