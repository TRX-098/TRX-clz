import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "listcmd",
    alias: ["listcmd"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah listcmd untuk TroxzyMD",
    usage: ".listcmd <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            reply("Daftar perintah tersedia: .ping, .yts, .google, .qrcode, .ocr, .translate, .kalkulator, .bug, .request, .report, .menu.");
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
