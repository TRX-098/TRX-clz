
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "grouplock",
              alias: ["grouplock"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah grouplock kategori group.",
              usage: ".grouplock <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await toggleState("group-settings.json", m.key.remoteJid, { locked: true }); reply("Grup dikunci: hanya admin yang dapat mengirim.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
