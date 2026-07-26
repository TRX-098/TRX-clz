
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "infogrup",
              alias: ["infogrup"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah infogrup kategori group.",
              usage: ".infogrup <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply(`Informasi grup: ${m.key.remoteJid}.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
