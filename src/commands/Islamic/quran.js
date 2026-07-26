
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "quran",
              alias: ["quran"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah quran kategori Islamic.",
              usage: ".quran <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Quran ayat hari ini: Bismillahirrahmanirrahim...");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
