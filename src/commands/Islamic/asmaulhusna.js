
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "asmaulhusna",
              alias: ["asmaulhusna"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah asmaulhusna kategori Islamic.",
              usage: ".asmaulhusna <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Asmaul Husna: Ar-Rahman, Ar-Rahim, Al-Malik...");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
