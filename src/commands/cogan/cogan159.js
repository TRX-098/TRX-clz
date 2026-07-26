
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "cogan159",
              alias: ["cogan159"],
              category: "cogan",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah cogan159 kategori cogan.",
              usage: ".cogan159 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah cogan159 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
