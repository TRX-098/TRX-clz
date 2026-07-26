import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "yts",
    alias: ["yts"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah yts untuk TroxzyMD",
    usage: ".yts <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .yts <kata kunci>"); const results = await ytdl.search(args.join(" "), { source: "youtube" }); reply(results.slice(0, 3).map((r) => `${r.title}: ${r.url}`).join("\n\n") || "Tidak ada hasil.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
