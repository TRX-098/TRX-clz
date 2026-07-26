
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "unafk",
              alias: ["unafk"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah unafk kategori group.",
              usage: ".unafk <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("user-status.json", sender, { afk: false }); reply("Tidak AFK lagi.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
