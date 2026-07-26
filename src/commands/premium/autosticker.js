
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "autosticker",
              alias: ["autosticker"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah autosticker kategori premium.",
              usage: ".autosticker <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("bot-settings.json", "autosticker", { enabled: true }); reply("Auto sticker aktif.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
