
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "antibug",
              alias: ["antibug"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah antibug kategori premium.",
              usage: ".antibug <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("bot-settings.json", "antibug", { enabled: true }); reply("Anti bug aktif.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
