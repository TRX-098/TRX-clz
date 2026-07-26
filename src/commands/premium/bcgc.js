
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "bcgc",
              alias: ["bcgc"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah bcgc kategori premium.",
              usage: ".bcgc <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .bcgc <pesan>"); await writeState("broadcast.json", { groupMessage: args.join(" ") }); reply("Broadcast grup disimpan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
