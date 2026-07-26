
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "antibanned",
              alias: ["antibanned"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah antibanned kategori premium.",
              usage: ".antibanned <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("bot-settings.json", "antibanned", { enabled: true }); reply("Anti banned aktif.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
