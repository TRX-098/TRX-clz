
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "cogan63",
              alias: ["cogan63"],
              category: "cogan",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah cogan63 kategori cogan.",
              usage: ".cogan63 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah cogan63 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
