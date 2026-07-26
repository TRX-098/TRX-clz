import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "hidetag",
    alias: ["hidetag"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah hidetag untuk TroxzyMD",
    usage: ".hidetag <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Hidetag: pesan akan dikirim tanpa notifikasi mention.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
