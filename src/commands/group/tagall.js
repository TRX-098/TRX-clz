
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "tagall",
              alias: ["tagall"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah tagall kategori group.",
              usage: ".tagall <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply(`@everyone Tag semua anggota grup.`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
