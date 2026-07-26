
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "zikir",
              alias: ["zikir"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah zikir kategori Islamic.",
              usage: ".zikir <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Zikir: Subhanallah, Alhamdulillah, Allahu Akbar.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
