import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "setppbot",
    alias: ["setppbot"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah setppbot untuk TroxzyMD",
    usage: ".setppbot <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Fitur setppbot: kirim foto dengan caption .setppbot untuk mengganti foto profil bot.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
