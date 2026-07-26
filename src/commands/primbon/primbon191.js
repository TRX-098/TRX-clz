
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "primbon191",
              alias: ["primbon191"],
              category: "primbon",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah primbon191 kategori primbon.",
              usage: ".primbon191 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah primbon191 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
