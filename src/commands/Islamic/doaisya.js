
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "doaisya",
              alias: ["doaisya"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah doaisya kategori Islamic.",
              usage: ".doaisya <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Doa isya: Jaga kami dalam tidur.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
