
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "resetwarn",
              alias: ["resetwarn"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah resetwarn kategori admin.",
              usage: ".resetwarn <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await writeState("warnings.json", {}); reply("Semua warning direset.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
