
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "restore",
              alias: ["restore"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah restore kategori premium.",
              usage: ".restore <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const backup = await readState("backup.json"); await writeState("bot-settings.json", backup); reply("Restore selesai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
