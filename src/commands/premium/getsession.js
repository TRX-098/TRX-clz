
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "getsession",
              alias: ["getsession"],
              category: "premium",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah getsession kategori premium.",
              usage: ".getsession <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const session = await readState("session.json"); reply(`Session entries: ${Object.keys(session).length}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
