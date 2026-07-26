import mongoose from "mongoose";

const RPGCharacterSchema = new mongoose.Schema({
  jid: { type: String, required: true, unique: true },
  name: { type: String, default: "Adventurer" },
  level: { type: Number, default: 1 },
  exp: { type: Number, default: 0 },
  hp: { type: Number, default: 100 },
  mp: { type: Number, default: 50 },
  stats: { type: Object, default: { strength: 10, agility: 10, intelligence: 10 } },
  inventory: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now }
});

const RPGCharacterModel = mongoose.models.RPGCharacter || mongoose.model("RPGCharacter", RPGCharacterSchema);
export default RPGCharacterModel;
