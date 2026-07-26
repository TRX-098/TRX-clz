
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "grouplink",
              alias: ["grouplink"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah grouplink kategori group.",
              usage: ".grouplink <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const state = await readState("group-settings.json"); const link = state[m.key.remoteJid]?.link || `https://chat.whatsapp.com/${uuid().slice(0, 20)}`; reply(`Link grup: ${link}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
