
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "block",
              alias: ["block"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah block kategori admin.",
              usage: ".block <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args[0]) return reply("Gunakan .block <user>"); await toggleState("blocklist.json", args[0], { blocked: true }); reply(`User diblokir: ${args[0]}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
