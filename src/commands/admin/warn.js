
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "warn",
              alias: ["warn"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah warn kategori admin.",
              usage: ".warn <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args[0]) return reply("Gunakan .warn <user>"); await toggleState("warnings.json", args[0], { warned: true }); reply(`User diperingatkan: ${args[0]}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
