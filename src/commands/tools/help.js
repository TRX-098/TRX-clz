import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "help",
    alias: ["help"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah help untuk TroxzyMD",
    usage: ".help <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Gunakan .menu untuk melihat fitur utama, atau cek dokumentasi bot.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
