import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "cuaca",
    alias: ["cuaca"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah cuaca untuk TroxzyMD",
    usage: ".cuaca <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .cuaca <kota>"); const kota = args.join(" "); const res = await fetch(`https://wttr.in/${encodeURIComponent(kota)}?format=3`); reply(await res.text());
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
