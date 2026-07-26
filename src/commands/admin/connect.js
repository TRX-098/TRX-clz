
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "connect",
              alias: ["connect"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah connect kategori admin.",
              usage: ".connect <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Anonymous chat connect.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
