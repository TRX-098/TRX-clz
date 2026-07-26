
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "murottal",
              alias: ["murottal"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah murottal kategori Islamic.",
              usage: ".murottal <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Murottal audio: https://example.com/murottal.mp3");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
