
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "groupinfo",
              alias: ["groupinfo"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah groupinfo kategori group.",
              usage: ".groupinfo <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const settings = await readState("group-settings.json"); const group = settings[m.key.remoteJid] || {}; reply(`Group info untuk ${m.key.remoteJid} | welcome=${group.welcome||false} | mute=${group.mute||false}`);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
