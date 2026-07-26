
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "hidetag",
              alias: ["hidetag"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah hidetag kategori group.",
              usage: ".hidetag <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Pesan tersembunyi terkirim.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
