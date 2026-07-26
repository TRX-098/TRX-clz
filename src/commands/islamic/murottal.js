
            import fetch from "node-fetch";
import { randomPick, formatJson, getBuffer, computeHash, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "murottal",
              alias: ["murottal"],
              category: "islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah murottal untuk kategori islamic.",
              usage: ".murottal <parameter>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Murottal audio tersedia.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
