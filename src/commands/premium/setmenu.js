
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "setmenu",
              alias: ["setmenu"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah setmenu kategori premium.",
              usage: ".setmenu <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Menu bot disetel ulang.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
