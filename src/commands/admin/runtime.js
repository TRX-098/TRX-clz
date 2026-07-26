
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "runtime",
              alias: ["runtime"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah runtime kategori admin.",
              usage: ".runtime <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply(`Runtime: Node ${process.version}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
