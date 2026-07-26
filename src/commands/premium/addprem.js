
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "addprem",
              alias: ["addprem"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah addprem kategori premium.",
              usage: ".addprem <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const premium = await readState("premium.json"); if (!args[0]) return reply("Gunakan .addprem <user>"); premium[args[0]] = true; await writeState("premium.json", premium); reply(`Premium ditambahkan: ${args[0]}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
