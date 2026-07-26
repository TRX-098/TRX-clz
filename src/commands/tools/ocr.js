import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "ocr",
    alias: ["ocr"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah ocr untuk TroxzyMD",
    usage: ".ocr <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .ocr <url gambar>"); const image = await getBuffer(args[0]); reply(`OCR: gambar berhasil diunduh dari ${args[0]}`);
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
