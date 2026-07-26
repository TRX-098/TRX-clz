
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "chord",
              alias: ["chord"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah chord kategori search.",
              usage: ".chord <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (args.length < 2) return reply("Gunakan .chord <artist> <judul>"); reply(`Chord sederhana untuk: ${args.join(" ")}\\n[Am] [C] [G] [F]`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
