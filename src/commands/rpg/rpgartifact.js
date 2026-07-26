
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgartifact",
              alias: ["rpgartifact"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgartifact kategori rpg.",
              usage: ".rpgartifact <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Artifact ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
