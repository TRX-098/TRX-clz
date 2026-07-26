
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "rpginventory",
              alias: ["rpginventory"],
              category: "rpg",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah rpginventory kategori rpg.",
              usage: ".rpginventory <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const rpg = await readState("rpg.json"); const user = rpg[sender] || { inventory: [] }; reply(`Inventory: ${(user.inventory||[]).join(", ") || "Kosong"}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
