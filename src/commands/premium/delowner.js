
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "delowner",
              alias: ["delowner"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah delowner kategori premium.",
              usage: ".delowner <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const owners = await readState("owners.json"); if (!args[0]) return reply("Gunakan .delowner <user>"); delete owners[args[0]]; await writeState("owners.json", owners); reply(`Owner dihapus: ${args[0]}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
