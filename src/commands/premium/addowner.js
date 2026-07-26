
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "addowner",
              alias: ["addowner"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah addowner kategori premium.",
              usage: ".addowner <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const owners = await readState("owners.json"); if (!args[0]) return reply("Gunakan .addowner <user>"); owners[args[0]] = true; await writeState("owners.json", owners); reply(`Owner ditambahkan: ${args[0]}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
