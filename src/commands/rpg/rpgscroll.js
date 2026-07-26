
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgscroll",
              alias: ["rpgscroll"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgscroll kategori rpg.",
              usage: ".rpgscroll <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Scroll RPG digunakan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
