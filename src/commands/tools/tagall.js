import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "tagall",
    alias: ["tagall"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah tagall untuk TroxzyMD",
    usage: ".tagall <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Tagall: mention semua anggota grup sedang dijalankan.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
