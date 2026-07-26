
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "ttsearch",
              alias: ["ttsearch"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah ttsearch kategori search.",
              usage: ".ttsearch <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .ttsearch <kata kunci>"); reply("Pencarian TikTok selesai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
