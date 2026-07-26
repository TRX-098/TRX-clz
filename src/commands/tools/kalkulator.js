import { getBuffer, randomPick, formatJson, computeHash, generateQrData } from "../../utils/commandHelper.js";
import googleIt from "google-it";
import fetch from "node-fetch";
import ytdl from "play-dl";

export default {
    name: "kalkulator",
    alias: ["kalkulator"],
    category: "tools",
    tier: "basic",
    cooldown: 5,
    limit: 10,
    description: "Perintah kalkulator untuk TroxzyMD",
    usage: ".kalkulator <parameter>",
    execute: async (m, { client, args, text, reply, command }) => {
        try {
            if (!args.length) return reply("Gunakan .kalkulator <ekspresi>"); try { const result = Function(`"use strict"; return (${args.join(" ")})`)(); reply(`Hasil: ${result}`); } catch (err) { reply("Ekspresi tidak valid."); }
        } catch (e) {
            reply("Error: " + e.message);
        }
    }
};
