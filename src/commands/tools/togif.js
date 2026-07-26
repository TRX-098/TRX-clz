import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "togif",
    alias: ["togif"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah togif untuk TroxzyMD",
    usage: ".togif <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Konversi ke GIF akan diproses.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
