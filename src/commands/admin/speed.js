
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "speed",
              alias: ["speed"],
              category: "admin",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah speed kategori admin.",
              usage: ".speed <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const start = Date.now(); await new Promise(res => setTimeout(res, 1)); reply(`Speed: ${Date.now()-start}ms`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
