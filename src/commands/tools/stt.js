import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "stt",
    alias: ["stt"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah stt untuk TroxzyMD",
    usage: ".stt <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Kirim audio untuk diproses STT.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
