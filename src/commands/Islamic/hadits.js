
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "hadits",
              alias: ["hadits"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah hadits kategori Islamic.",
              usage: ".hadits <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Hadits harian: Kerjakan kebaikan setiap hari.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
