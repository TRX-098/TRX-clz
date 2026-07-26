import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "speed",
    alias: ["speed"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah speed untuk TroxzyMD",
    usage: ".speed <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            const start = Date.now(); await new Promise((resolve) => setTimeout(resolve, 1)); reply(`Speed: ${Date.now() - start}ms`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
