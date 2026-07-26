
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "listcmd",
              alias: ["listcmd"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah listcmd kategori admin.",
              usage: ".listcmd <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Daftar perintah custom ditampilkan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
