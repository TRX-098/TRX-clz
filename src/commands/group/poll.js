
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "poll",
              alias: ["poll"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah poll kategori group.",
              usage: ".poll <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const question = args.join(" ") || "Polling belum diisi."; await toggleState("group-polls.json", m.key.remoteJid, { question, votes: {} }); reply(`Poll dibuat: ${question}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
