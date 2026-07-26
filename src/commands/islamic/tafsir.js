
            import fetch from "node-fetch";
import { randomPick, formatJson, getBuffer, computeHash, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "tafsir",
              alias: ["tafsir"],
              category: "islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah tafsir untuk kategori islamic.",
              usage: ".tafsir <parameter>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Tafsir singkat ayat hari ini.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
