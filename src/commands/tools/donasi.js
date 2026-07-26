import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "donasi",
    alias: ["donasi"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah donasi untuk TroxzyMD",
    usage: ".donasi <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Donasi: 6281410528015 (Bank/Midtrans). Terima kasih atas dukungan.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
