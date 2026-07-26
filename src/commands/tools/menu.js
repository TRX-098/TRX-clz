import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "menu",
    alias: ["menu"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah menu untuk TroxzyMD",
    usage: ".menu <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Gunakan .listcmd untuk daftar perintah, .help untuk bantuan.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
