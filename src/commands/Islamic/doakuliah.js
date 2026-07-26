
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "doakuliah",
              alias: ["doakuliah"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah doakuliah kategori Islamic.",
              usage: ".doakuliah <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Doa kuliah: Allah mudahkan ilmu dan kelulusan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
