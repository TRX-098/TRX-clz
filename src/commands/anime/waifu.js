
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "waifu",
              alias: ["waifu"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah waifu kategori anime.",
              usage: ".waifu <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const data = await fetch("https://api.waifu.pics/sfw/waifu").then(r => r.json()); reply(data.url || "Tidak ada.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
