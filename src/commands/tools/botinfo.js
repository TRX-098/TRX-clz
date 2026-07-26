import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "botinfo",
    alias: ["botinfo"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah botinfo untuk TroxzyMD",
    usage: ".botinfo <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Bot TroxzyMD versi 1.0 siap melayani.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
