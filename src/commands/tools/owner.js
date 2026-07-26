import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "owner",
    alias: ["owner"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah owner untuk TroxzyMD",
    usage: ".owner <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Owner: Trozzy - 6281410528015. Telegram: t.me/SoloBanNoTrash");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
