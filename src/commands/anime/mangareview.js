
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "mangareview",
              alias: ["mangareview"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah mangareview kategori anime.",
              usage: ".mangareview <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Review manga tersedia.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
