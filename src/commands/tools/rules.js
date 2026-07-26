import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "rules",
    alias: ["rules"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah rules untuk TroxzyMD",
    usage: ".rules <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Rules: no spam, no SARA, no illegal content, respect others.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
