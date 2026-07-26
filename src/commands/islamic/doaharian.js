
            import fetch from "node-fetch";
import { randomPick, formatJson, getBuffer, computeHash, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "doaharian",
              alias: ["doaharian"],
              category: "islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah doaharian untuk kategori islamic.",
              usage: ".doaharian <parameter>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Doa harian: Ya Allah, berikan kami keberkahan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
