
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "doadzuhur",
              alias: ["doadzuhur"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah doadzuhur kategori Islamic.",
              usage: ".doadzuhur <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Doa dzuhur: Ya Allah, berkati ibadah kami.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
