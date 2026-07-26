
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "listblock",
              alias: ["listblock"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah listblock kategori admin.",
              usage: ".listblock <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const blocks = Object.keys(await readState("blocklist.json")); reply(`Blocked:\\n${blocks.join("\\n") || "Kosong"}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
