
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "setbio",
              alias: ["setbio"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah setbio kategori premium.",
              usage: ".setbio <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .setbio <bio>"); await toggleState("bot-settings.json", "bio", { value: args.join(" ") }); reply(`Bio diubah menjadi: ${args.join(" ")}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
