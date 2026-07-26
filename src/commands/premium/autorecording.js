
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "autorecording",
              alias: ["autorecording"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah autorecording kategori premium.",
              usage: ".autorecording <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("bot-settings.json", "autorecording", { enabled: true }); reply("Auto recording aktif.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
