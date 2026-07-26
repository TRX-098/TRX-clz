
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "serverinfo",
              alias: ["serverinfo"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah serverinfo kategori admin.",
              usage: ".serverinfo <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Server info: Node.js, platform, uptime.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
