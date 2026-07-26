import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "qrscan",
    alias: ["qrscan"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah qrscan untuk TroxzyMD",
    usage: ".qrscan <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("QR scan aktif, kirim URL gambar QR untuk dipindai.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
