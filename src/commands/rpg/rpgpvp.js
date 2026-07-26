
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgpvp",
              alias: ["rpgpvp"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgpvp kategori rpg.",
              usage: ".rpgpvp <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("PvP battle dimulai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
