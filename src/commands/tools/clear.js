import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "clear",
    alias: ["clear"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah clear untuk TroxzyMD",
    usage: ".clear <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Chat window dibersihkan.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
