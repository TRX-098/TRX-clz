
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "caribeasiswa",
              alias: ["caribeasiswa"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah caribeasiswa kategori search.",
              usage: ".caribeasiswa <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Mencari beasiswa terbaru... Gunakan sumber resmi untuk informasi lengkap.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
