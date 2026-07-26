import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "runtime",
    alias: ["runtime"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah runtime untuk TroxzyMD",
    usage: ".runtime <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply(`Runtime: Node ${process.version}`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
