
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "setppbot",
              alias: ["setppbot"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah setppbot kategori premium.",
              usage: ".setppbot <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Kirim gambar untuk set PP bot.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
