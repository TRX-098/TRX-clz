
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "animequote",
              alias: ["animequote"],
              category: "anime",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah animequote kategori anime.",
              usage: ".animequote <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const quotes = ["Kegagalan bukan akhir.", "Terus berjuang sampai sukses."]; reply(randomPick(quotes));
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
