
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "clear",
              alias: ["clear"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah clear kategori admin.",
              usage: ".clear <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Chat dibersihkan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
