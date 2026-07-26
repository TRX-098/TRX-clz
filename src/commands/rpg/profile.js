import RPGCharacterModel from "../../database/models/RPGCharacter.js";

export default {
  name: "profile",
  alias: ["rpgprofile"],
  category: "rpg",
  tier: "basic",
  cooldown: 10,
  limit: 10,
  description: "Tampilkan profil karakter RPG Anda",
  usage: ".profile",
  execute: async (m, { client, sender }) => {
    const character = await RPGCharacterModel.findOneAndUpdate({ jid: sender }, { $setOnInsert: { name: "Adventurer", level: 1, exp: 0, hp: 100, mp: 50, stats: { strength: 10, agility: 10, intelligence: 10 } } }, { upsert: true, new: true });
    await client.sendMessage(m.key.remoteJid, { text: `Profil RPG:\nNama: ${character.name}\nLevel: ${character.level}\nEXP: ${character.exp}\nHP: ${character.hp}\nMP: ${character.mp}` });
  }
};
