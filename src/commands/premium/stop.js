
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "stop",
              alias: ["stop"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah stop kategori premium.",
              usage: ".stop <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Stop action dijalankan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
