
            import fetch from "node-fetch";
import { randomPick, formatJson, computeHash, generateQrData, getBuffer, uuid } from "../../utils/commandHelper.js";
import { readState, writeState, toggleState } from "../../utils/stateStore.js";

            export default {
              name: "recipe",
              alias: ["recipe"],
              category: "search",
              tier: "basic",
              cooldown: 10,
              limit: 20,
              description: "Perintah recipe kategori search.",
              usage: ".recipe <args>",
              execute: async (m, { client, args, text, reply, command, sender }) => {
                try {
                  if (!args.length) return reply("Gunakan .recipe <nama makanan>"); const query = args.join(" "); const meal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`).then(r => r.json()).then(data => data.meals?.[0]); reply(meal ? `${meal.strMeal}\\n${meal.strInstructions.slice(0,200)}...` : "Resep tidak ditemukan.");
                } catch (e) {
                  reply("Error: " + e.message);
                }
              }
            };
