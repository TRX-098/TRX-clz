import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "kalender",
    alias: ["kalender"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah kalender untuk TroxzyMD",
    usage: ".kalender <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            const now = new Date(); reply(`Tahun: ${now.getFullYear()} Bulan: ${now.getMonth() + 1}`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
