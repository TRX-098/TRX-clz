
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "listwarn",
              alias: ["listwarn"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah listwarn kategori admin.",
              usage: ".listwarn <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const warns = Object.keys(await readState("warnings.json")); reply(`Warned:\\n${warns.join("\\n") || "Kosong"}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
