
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "uptime",
              alias: ["uptime"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah uptime kategori admin.",
              usage: ".uptime <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply(`Uptime: ${process.uptime().toFixed(2)} detik.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
