
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "antilink",
              alias: ["antilink"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah antilink kategori group.",
              usage: ".antilink <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("group-settings.json", m.key.remoteJid, { antilink: true }); reply("Anti-link aktif.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
