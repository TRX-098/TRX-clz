
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "delprem",
              alias: ["delprem"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah delprem kategori premium.",
              usage: ".delprem <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const premium = await readState("premium.json"); if (!args[0]) return reply("Gunakan .delprem <user>"); delete premium[args[0]]; await writeState("premium.json", premium); reply(`Premium dihapus: ${args[0]}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
