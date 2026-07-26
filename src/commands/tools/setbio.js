import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "setbio",
    alias: ["setbio"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah setbio untuk TroxzyMD",
    usage: ".setbio <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .setbio <bio>"); reply(`Bio bot diubah menjadi: ${args.join(" ")}`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
