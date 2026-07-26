import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "bug",
    alias: ["bug"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah bug untuk TroxzyMD",
    usage: ".bug <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .bug <deskripsi>"); reply(`Bug dicatat: ${args.join(" ")}`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
