
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "skip",
              alias: ["skip"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah skip kategori admin.",
              usage: ".skip <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Skip action dilakukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
