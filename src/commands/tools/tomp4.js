import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "tomp4",
    alias: ["tomp4"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah tomp4 untuk TroxzyMD",
    usage: ".tomp4 <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Konversi ke MP4 akan diproses.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
