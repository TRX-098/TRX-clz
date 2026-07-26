
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "setprefix",
              alias: ["setprefix"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah setprefix kategori admin.",
              usage: ".setprefix <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args[0]) return reply("Gunakan .setprefix <prefix>"); await toggleState("bot-settings.json", "prefix", { value: args[0] }); reply(`Prefix diubah menjadi ${args[0]}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
