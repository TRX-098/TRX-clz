
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "horoscope",
              alias: ["horoscope"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah horoscope kategori search.",
              usage: ".horoscope <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const sign = args[0] || "aries"; const data = await fetch(`https://aztro.sameerkumar.website/?sign=${encodeURIComponent(sign)}&day=today`, { method: "POST" }).then(r => r.json()); reply(`Horoscope ${sign}: ${data.description}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
