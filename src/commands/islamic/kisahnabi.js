
            import fetch from "node-fetch";
import { randomPick, formatJson, getBuffer, computeHash, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "kisahnabi",
              alias: ["kisahnabi"],
              category: "islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah kisahnabi untuk kategori islamic.",
              usage: ".kisahnabi <parameter>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Kisah nabi dipelajari.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
