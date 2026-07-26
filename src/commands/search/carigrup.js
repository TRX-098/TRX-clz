
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "carigrup",
              alias: ["carigrup"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah carigrup kategori search.",
              usage: ".carigrup <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply(`Mencari grup untuk: ${args.join(" ")}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
