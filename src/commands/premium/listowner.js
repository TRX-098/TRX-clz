
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "listowner",
              alias: ["listowner"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah listowner kategori premium.",
              usage: ".listowner <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const owners = await readState("owners.json"); reply(`Owner list:\\n${Object.keys(owners).join("\\n") || "Kosong"}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
