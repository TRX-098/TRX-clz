import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "tinyurl",
    alias: ["tinyurl"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah tinyurl untuk TroxzyMD",
    usage: ".tinyurl <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .tinyurl <url>"); const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(args[0])}`); reply(await res.text());
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
