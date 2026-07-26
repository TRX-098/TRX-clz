import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "wikipedia",
    alias: ["wikipedia"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah wikipedia untuk TroxzyMD",
    usage: ".wikipedia <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .wikipedia <kata kunci>"); const term = args.join(" "); const res = await fetch(`https://id.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`); if (!res.ok) return reply("Halaman tidak ditemukan."); const data = await res.json(); reply(`${data.title}
${data.extract}
${data.content_urls?.desktop?.page}`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
