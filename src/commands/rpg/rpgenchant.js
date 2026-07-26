
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgenchant",
              alias: ["rpgenchant"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgenchant kategori rpg.",
              usage: ".rpgenchant <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Enchant sukses.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
