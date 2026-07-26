
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "unban",
              alias: ["unban"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah unban kategori admin.",
              usage: ".unban <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args[0]) return reply("Gunakan .unban <user>"); const mod = await readState("moderation.json"); delete mod[args[0]]; await writeState("moderation.json", mod); reply(`User diunban: ${args[0]}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
