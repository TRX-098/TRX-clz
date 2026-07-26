
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "caribokep",
              alias: ["caribokep"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah caribokep kategori search.",
              usage: ".caribokep <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  const joke = randomPick(["Kenapa ayam menyeberang jalan? Untuk sampai ke sisi lain.", "Ada dua jenis orang: yang suka kopi, dan yang salah."]); reply(joke);
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
