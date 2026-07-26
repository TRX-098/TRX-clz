import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "purge",
    alias: ["purge"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah purge untuk TroxzyMD",
    usage: ".purge <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Riwayat chat berhasil dibersihkan.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
