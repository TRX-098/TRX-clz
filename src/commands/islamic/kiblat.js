
            import fetch from "node-fetch";
import { randomPick, formatJson, getBuffer, computeHash, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "kiblat",
              alias: ["kiblat"],
              category: "islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah kiblat untuk kategori islamic.",
              usage: ".kiblat <parameter>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Arah kiblat: 293° dari lokasi Anda.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
