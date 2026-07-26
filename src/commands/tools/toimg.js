import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "toimg",
    alias: ["toimg"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah toimg untuk TroxzyMD",
    usage: ".toimg <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Konversi sticker ke gambar akan diproses.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
