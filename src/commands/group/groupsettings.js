
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "groupsettings",
              alias: ["groupsettings"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah groupsettings kategori group.",
              usage: ".groupsettings <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const settings = await readState("group-settings.json"); const group = settings[m.key.remoteJid] || {}; reply(`Group settings:\\n${formatJson(group)}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
