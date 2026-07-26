
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgmount",
              alias: ["rpgmount"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgmount kategori rpg.",
              usage: ".rpgmount <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Mount RPG digunakan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
