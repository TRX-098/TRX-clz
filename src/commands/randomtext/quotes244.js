
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "quotes244",
              alias: ["quotes244"],
              category: "randomtext",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah quotes244 kategori randomtext.",
              usage: ".quotes244 <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Perintah quotes244 dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
