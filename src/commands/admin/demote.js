
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "demote",
              alias: ["demote"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah demote kategori admin.",
              usage: ".demote <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Sebutan admin yang ingin diturunkan."); reply(`Demoted: ${args.join(" ")}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
