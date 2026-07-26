import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "translate",
    alias: ["translate"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah translate untuk TroxzyMD",
    usage: ".translate <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .translate <teks>"); const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(args.join(" "))}&langpair=en|id`); const data = await res.json(); reply(data.responseData?.translatedText || "Terjemahan gagal.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
