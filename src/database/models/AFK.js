import mongoose from "mongoose";

const AFKSchema = new mongoose.Schema({
  jid: { type: String, required: true, unique: true },
  reason: { type: String, default: "Sedang AFK" },
  since: { type: Date, default: Date.now }
});

const AFKModel = mongoose.models.AFK || mongoose.model("AFK", AFKSchema);
export default AFKModel;
