
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "antisticker",
              alias: ["antisticker"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah antisticker kategori group.",
              usage: ".antisticker <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("group-settings.json", m.key.remoteJid, { antisticker: true }); reply("Anti-sticker aktif.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
