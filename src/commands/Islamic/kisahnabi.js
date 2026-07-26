
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "kisahnabi",
              alias: ["kisahnabi"],
              category: "Islamic",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah kisahnabi kategori Islamic.",
              usage: ".kisahnabi <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Kisah Nabi: pelajaran iman dan kesabaran.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
