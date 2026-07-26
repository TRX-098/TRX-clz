
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "delsession",
              alias: ["delsession"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah delsession kategori premium.",
              usage: ".delsession <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  await writeState("session.json", {}); reply("Session dihapus.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
