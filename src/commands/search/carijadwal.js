
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "carijadwal",
              alias: ["carijadwal"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah carijadwal kategori search.",
              usage: ".carijadwal <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply(`Jadwal yang ditemukan untuk: ${args.join(" ")}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
