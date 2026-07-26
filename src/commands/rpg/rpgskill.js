
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgskill",
              alias: ["rpgskill"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgskill kategori rpg.",
              usage: ".rpgskill <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Skill RPG: Slash, Fireball, Heal.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
