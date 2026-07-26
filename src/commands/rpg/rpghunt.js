
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpghunt",
              alias: ["rpghunt"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpghunt kategori rpg.",
              usage: ".rpghunt <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const loot = randomPick(["Bulu","Tanduk","Kulit"]); reply(`Hunt mendapatkan ${loot}.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
