
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "afk",
              alias: ["afk"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah afk kategori group.",
              usage: ".afk <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("user-status.json", sender, { afk: true, reason: args.join(" ") || "AFK" }); reply("Status AFK aktif.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
