
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "shop",
              alias: ["shop"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah shop kategori economy.",
              usage: ".shop <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Toko: Pedang 5000, Perisai 3500, Potion 1500.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
