
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgshop",
              alias: ["rpgshop"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgshop kategori rpg.",
              usage: ".rpgshop <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("RPG shop ditampilkan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
