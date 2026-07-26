
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "unblock",
              alias: ["unblock"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah unblock kategori admin.",
              usage: ".unblock <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args[0]) return reply("Gunakan .unblock <user>"); const blocks = await readState("blocklist.json"); delete blocks[args[0]]; await writeState("blocklist.json", blocks); reply(`User dibuka blokir: ${args[0]}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
