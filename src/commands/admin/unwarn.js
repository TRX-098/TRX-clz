
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "unwarn",
              alias: ["unwarn"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah unwarn kategori admin.",
              usage: ".unwarn <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args[0]) return reply("Gunakan .unwarn <user>"); const warns = await readState("warnings.json"); delete warns[args[0]]; await writeState("warnings.json", warns); reply(`Warning dihapus: ${args[0]}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
