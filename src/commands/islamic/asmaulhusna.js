
            import fetch from "node-fetch";
import { randomPick, formatJson, getBuffer, computeHash, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "asmaulhusna",
              alias: ["asmaulhusna"],
              category: "islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah asmaulhusna untuk kategori islamic.",
              usage: ".asmaulhusna <parameter>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Asmaul husna: Ar Rahman, Ar Rahim, Al Malik...");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
