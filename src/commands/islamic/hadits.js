
            import fetch from "node-fetch";
import { randomPick, formatJson, getBuffer, computeHash, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "hadits",
              alias: ["hadits"],
              category: "islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah hadits untuk kategori islamic.",
              usage: ".hadits <parameter>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Hadits harian: Jangan meremehkan sedekah.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
