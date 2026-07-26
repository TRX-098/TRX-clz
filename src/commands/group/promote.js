
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "promote",
              alias: ["promote"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah promote kategori group.",
              usage: ".promote <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Sebutan admin yang ingin dipromosikan."); reply(`Promoted: ${args.join(" ")}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
