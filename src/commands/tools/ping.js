import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "ping",
    alias: ["ping"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah ping untuk TroxzyMD",
    usage: ".ping <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Pong! TroxzyMD online.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
