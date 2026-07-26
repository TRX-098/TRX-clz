
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "primbon302",
              alias: ["primbon302"],
              category: "primbon",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah primbon302 kategori primbon.",
              usage: ".primbon302 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah primbon302 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
