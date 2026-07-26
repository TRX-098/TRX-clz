
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "cecan197",
              alias: ["cecan197"],
              category: "cecan",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah cecan197 kategori cecan.",
              usage: ".cecan197 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah cecan197 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
