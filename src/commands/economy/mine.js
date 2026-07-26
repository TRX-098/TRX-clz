
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "mine",
              alias: ["mine"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah mine kategori economy.",
              usage: ".mine <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const ore = Math.floor(Math.random()*5)+1; reply(`Mine mendapatkan ${ore} ore.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
