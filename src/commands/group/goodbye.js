
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "goodbye",
              alias: ["goodbye"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah goodbye kategori group.",
              usage: ".goodbye <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("group-settings.json", m.key.remoteJid, { goodbye: true }); reply("Goodbye otomatis diaktifkan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
