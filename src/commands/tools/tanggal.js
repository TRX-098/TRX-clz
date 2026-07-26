import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "tanggal",
    alias: ["tanggal"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah tanggal untuk TroxzyMD",
    usage: ".tanggal <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply(`Tanggal sekarang: ${new Date().toLocaleDateString("id-ID")}`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
