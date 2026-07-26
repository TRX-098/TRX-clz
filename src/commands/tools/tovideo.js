import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "tovideo",
    alias: ["tovideo"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah tovideo untuk TroxzyMD",
    usage: ".tovideo <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Konversi ke video akan diproses.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
