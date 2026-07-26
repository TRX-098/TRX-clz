
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "cogan100",
              alias: ["cogan100"],
              category: "cogan",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah cogan100 kategori cogan.",
              usage: ".cogan100 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah cogan100 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
