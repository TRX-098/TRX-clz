
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "linkgrup",
              alias: ["linkgrup"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah linkgrup kategori group.",
              usage: ".linkgrup <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const state = await readState("group-settings.json"); reply(`Link grup: ${state[m.key.remoteJid]?.link || "belum disetel"}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
