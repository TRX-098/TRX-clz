import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "jam",
    alias: ["jam"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah jam untuk TroxzyMD",
    usage: ".jam <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply(`Waktu sekarang: ${new Date().toLocaleTimeString("id-ID")}`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
