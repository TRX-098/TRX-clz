
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "backup",
              alias: ["backup"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah backup kategori premium.",
              usage: ".backup <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const settings = await readState("bot-settings.json"); await writeState("backup.json", settings); reply("Backup selesai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
