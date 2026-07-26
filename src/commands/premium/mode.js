
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "mode",
              alias: ["mode"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah mode kategori premium.",
              usage: ".mode <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply(`Mode bot diubah menjadi: ${args.join(" ") || "default"}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
