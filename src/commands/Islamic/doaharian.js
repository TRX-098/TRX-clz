
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "doaharian",
              alias: ["doaharian"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah doaharian kategori Islamic.",
              usage: ".doaharian <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Doa harian: Ya Allah, berkahi kami.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
