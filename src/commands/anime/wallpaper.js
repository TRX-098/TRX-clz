
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "wallpaper",
              alias: ["wallpaper"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah wallpaper kategori anime.",
              usage: ".wallpaper <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const data = await fetch("https://api.waifu.pics/sfw/waifu").then(r => r.json()); reply(data.url || "Wallpaper tidak ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
