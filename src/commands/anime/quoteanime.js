
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "quoteanime",
              alias: ["quoteanime"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah quoteanime kategori anime.",
              usage: ".quoteanime <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const data = await fetch("https://animechan.vercel.app/api/random").then(r => r.json()); reply(`${data.character}: ${data.quote}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
