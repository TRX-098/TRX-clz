
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "listban",
              alias: ["listban"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah listban kategori admin.",
              usage: ".listban <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const bans = Object.keys(await readState("moderation.json")); reply(`Banned:\\n${bans.join("\\n") || "Kosong"}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
