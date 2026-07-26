
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "cogan6",
              alias: ["cogan6"],
              category: "cogan",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah cogan6 kategori cogan.",
              usage: ".cogan6 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah cogan6 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
