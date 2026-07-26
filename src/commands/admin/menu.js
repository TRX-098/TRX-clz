
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "menu",
              alias: ["menu"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah menu kategori admin.",
              usage: ".menu <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Menu: gunakan .help untuk bantuan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
