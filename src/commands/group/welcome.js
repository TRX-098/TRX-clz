
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "welcome",
              alias: ["welcome"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah welcome kategori group.",
              usage: ".welcome <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("group-settings.json", m.key.remoteJid, { welcome: true }); reply("Welcome otomatis diaktifkan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
