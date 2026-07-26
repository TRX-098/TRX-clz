import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "request",
    alias: ["request"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah request untuk TroxzyMD",
    usage: ".request <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .request <fitur>"); reply(`Request diterima: ${args.join(" ")}`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
