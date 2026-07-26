
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "donate",
              alias: ["donate"],
              category: "economy",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah donate kategori economy.",
              usage: ".donate <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const amount = Number(args[0]) || 0; reply(`Donasi diterima: ${amount}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
