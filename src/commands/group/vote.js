
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "vote",
              alias: ["vote"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah vote kategori group.",
              usage: ".vote <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const polls = await readState("group-polls.json"); const poll = polls[m.key.remoteJid]; if (!poll) return reply("Tidak ada poll aktif."); poll.votes[sender] = args.join(" ") || "ya"; await writeState("group-polls.json", polls); reply(`Suara diterima: ${poll.votes[sender]}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
