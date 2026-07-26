import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "setbotname",
    alias: ["setbotname"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah setbotname untuk TroxzyMD",
    usage: ".setbotname <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .setbotname <nama>"); reply(`Nama bot diubah menjadi: ${args.join(" ")}`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
