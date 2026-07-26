import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "google",
    alias: ["google"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah google untuk TroxzyMD",
    usage: ".google <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .google <kata kunci>"); const results = await googleIt({ query: args.join(" "), limit: 3 }); reply(results.map((r) => `${r.title}\n${r.link}`).join("\n\n") || "Tidak ada hasil.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
