
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "public",
              alias: ["public"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah public kategori premium.",
              usage: ".public <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Mode public aktif.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
