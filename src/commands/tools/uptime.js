import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "uptime",
    alias: ["uptime"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah uptime untuk TroxzyMD",
    usage: ".uptime <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply(`Uptime: ${process.uptime().toFixed(2)} detik.`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
