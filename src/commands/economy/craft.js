
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "craft",
              alias: ["craft"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah craft kategori economy.",
              usage: ".craft <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Craft item RPG selesai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
