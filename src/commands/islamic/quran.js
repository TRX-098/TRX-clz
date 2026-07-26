
            import fetch from "node-fetch";
import { randomPick, formatJson, getBuffer, computeHash, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "quran",
              alias: ["quran"],
              category: "islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah quran untuk kategori islamic.",
              usage: ".quran <parameter>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Quran ayat hari ini: Bismillahirrahmanirrahim...");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
