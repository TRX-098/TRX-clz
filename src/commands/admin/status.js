
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "status",
              alias: ["status"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah status kategori admin.",
              usage: ".status <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Status: Online.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
