
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpgclass",
              alias: ["rpgclass"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpgclass kategori rpg.",
              usage: ".rpgclass <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Pilih kelas: Warrior, Mage, Archer."); const rpg = await readState("rpg.json"); const user = rpg[sender] || { inventory: [] }; user.class = args[0]; rpg[sender] = user; await writeState("rpg.json", rpg); reply(`Kelas dipilih: ${args[0]}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
