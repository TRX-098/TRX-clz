
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "zakatan",
              alias: ["zakatan"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah zakatan kategori Islamic.",
              usage: ".zakatan <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Zakat: kewajiban 2.5% dari harta bersih.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
