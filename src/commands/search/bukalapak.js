
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "bukalapak",
              alias: ["bukalapak"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah bukalapak kategori search.",
              usage: ".bukalapak <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply(`Bukalapak search: ${args.join(" ")}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
