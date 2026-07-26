
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "xsearch",
              alias: ["xsearch"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah xsearch kategori search.",
              usage: ".xsearch <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .xsearch <kata kunci>"); reply("Pencarian X selesai.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
