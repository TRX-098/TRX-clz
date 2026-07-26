
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "groupmenu",
              alias: ["groupmenu"],
              category: "group",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah groupmenu kategori group.",
              usage: ".groupmenu <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  reply("Menu grup: .welcome, .goodbye, .antilink, .promote, .demote, .tagall.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
