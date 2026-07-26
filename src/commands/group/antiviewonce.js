
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "antiviewonce",
              alias: ["antiviewonce"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah antiviewonce kategori group.",
              usage: ".antiviewonce <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("group-settings.json", m.key.remoteJid, { antiviewonce: true }); reply("Anti-view-once aktif.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
