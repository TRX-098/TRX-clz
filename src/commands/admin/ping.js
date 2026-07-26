
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "ping",
              alias: ["ping"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah ping kategori admin.",
              usage: ".ping <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Pong!");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
