
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "cogan29",
              alias: ["cogan29"],
              category: "cogan",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah cogan29 kategori cogan.",
              usage: ".cogan29 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah cogan29 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
