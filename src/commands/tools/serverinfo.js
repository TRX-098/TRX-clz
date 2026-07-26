import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "serverinfo",
    alias: ["serverinfo"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah serverinfo untuk TroxzyMD",
    usage: ".serverinfo <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply(`Node: ${process.version}, Platform: ${process.platform}`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
