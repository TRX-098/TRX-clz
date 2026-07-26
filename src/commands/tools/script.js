import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "script",
    alias: ["script"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah script untuk TroxzyMD",
    usage: ".script <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Script: TroxzyMD core Node.js + Baileys + MongoDB + Redis.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
