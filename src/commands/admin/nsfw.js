
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "nsfw",
              alias: ["nsfw"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah nsfw kategori admin.",
              usage: ".nsfw <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Mode NSFW diaktifkan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
