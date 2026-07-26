
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "fish",
              alias: ["fish"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah fish kategori economy.",
              usage: ".fish <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const fish = Math.floor(Math.random()*4)+1; reply(`Menangkap ${fish} ikan.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
