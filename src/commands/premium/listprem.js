
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "listprem",
              alias: ["listprem"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah listprem kategori premium.",
              usage: ".listprem <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const premium = await readState("premium.json"); reply(`Premium list:\\n${Object.keys(premium).join("\\n") || "Kosong"}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
