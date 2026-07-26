import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "status",
    alias: ["status"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah status untuk TroxzyMD",
    usage: ".status <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Status: Online dan siap.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
