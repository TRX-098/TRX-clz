
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "hunt",
              alias: ["hunt"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah hunt kategori economy.",
              usage: ".hunt <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const prey = randomPick(["kelinci","kambing","babi"]); reply(`Hunt dapat: ${prey}.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
