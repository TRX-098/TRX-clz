
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "farm",
              alias: ["farm"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah farm kategori economy.",
              usage: ".farm <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const crop = Math.floor(Math.random()*5)+1; reply(`Farm menghasilkan ${crop} crop.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
