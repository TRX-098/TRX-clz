
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "primbon418",
              alias: ["primbon418"],
              category: "primbon",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah primbon418 kategori primbon.",
              usage: ".primbon418 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah primbon418 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
