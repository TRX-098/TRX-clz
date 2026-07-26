
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "autoread",
              alias: ["autoread"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah autoread kategori premium.",
              usage: ".autoread <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("bot-settings.json", "autoread", { enabled: true }); reply("Auto-read aktif.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
