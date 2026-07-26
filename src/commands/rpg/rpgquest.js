
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgquest",
              alias: ["rpgquest"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgquest kategori rpg.",
              usage: ".rpgquest <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Quest RPG dimulai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
