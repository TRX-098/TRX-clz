
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "cecan343",
              alias: ["cecan343"],
              category: "cecan",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah cecan343 kategori cecan.",
              usage: ".cecan343 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah cecan343 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
