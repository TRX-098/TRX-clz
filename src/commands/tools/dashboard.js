import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "dashboard",
    alias: ["dashboard"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah dashboard untuk TroxzyMD",
    usage: ".dashboard <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Dashboard: gunakan panel monitoring untuk metrik server.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
