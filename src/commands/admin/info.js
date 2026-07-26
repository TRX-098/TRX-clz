
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "info",
              alias: ["info"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah info kategori admin.",
              usage: ".info <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply(`Command: ${command.name}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
