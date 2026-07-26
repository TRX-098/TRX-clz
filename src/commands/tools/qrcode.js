import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "qrcode",
    alias: ["qrcode"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah qrcode untuk TroxzyMD",
    usage: ".qrcode <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .qrcode <text>"); const data = await generateQrData(args.join(" ")); reply(data);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
