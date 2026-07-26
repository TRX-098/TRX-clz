
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "botinfo",
              alias: ["botinfo"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah botinfo kategori admin.",
              usage: ".botinfo <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Bot info: TroxzyMD.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
