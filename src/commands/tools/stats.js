import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "stats",
    alias: ["stats"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah stats untuk TroxzyMD",
    usage: ".stats <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply(`Bot online. Uptime: ${process.uptime().toFixed(2)} detik.`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
