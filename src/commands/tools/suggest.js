import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "suggest",
    alias: ["suggest"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah suggest untuk TroxzyMD",
    usage: ".suggest <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .suggest <saran>"); reply(`Saran diterima: ${args.join(" ")}`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
