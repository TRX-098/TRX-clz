
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "mangachapter",
              alias: ["mangachapter"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah mangachapter kategori anime.",
              usage: ".mangachapter <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Chapter manga dimuat dari API.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
