
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "autotyping",
              alias: ["autotyping"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah autotyping kategori premium.",
              usage: ".autotyping <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("bot-settings.json", "autotyping", { enabled: true }); reply("Auto typing aktif.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
