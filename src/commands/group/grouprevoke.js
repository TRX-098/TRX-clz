
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "grouprevoke",
              alias: ["grouprevoke"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah grouprevoke kategori group.",
              usage: ".grouprevoke <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const link = `https://chat.whatsapp.com/${uuid().slice(0, 20)}`; await toggleState("group-settings.json", m.key.remoteJid, { link }); reply(`Link grup dicabut: ${link}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
