import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "del",
    alias: ["del"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah del untuk TroxzyMD",
    usage: ".del <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Pesan berhasil dihapus.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
