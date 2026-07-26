import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "tourl",
    alias: ["tourl"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah tourl untuk TroxzyMD",
    usage: ".tourl <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .tourl <file>"); reply(`URL file: https://files.troxzymd.io/${computeHash(args.join(" ")).slice(0, 8)}`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
