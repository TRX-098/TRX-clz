
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "jadwalsholat",
              alias: ["jadwalsholat"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah jadwalsholat kategori Islamic.",
              usage: ".jadwalsholat <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Jadwal sholat hari ini: Subuh 04:30, Dzuhur 12:00, Ashar 15:15, Maghrib 18:00, Isya 19:30.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
