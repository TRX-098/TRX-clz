
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgelixir",
              alias: ["rpgelixir"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgelixir kategori rpg.",
              usage: ".rpgelixir <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Elixir dikonsumsi.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
