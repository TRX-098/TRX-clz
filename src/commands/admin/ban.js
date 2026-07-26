
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "ban",
              alias: ["ban"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah ban kategori admin.",
              usage: ".ban <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args[0]) return reply("Gunakan .ban <user>"); await toggleState("moderation.json", args[0], { banned: true }); reply(`User diban: ${args[0]}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
