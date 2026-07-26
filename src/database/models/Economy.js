import mongoose from "mongoose";

const EconomySchema = new mongoose.Schema({
  jid: { type: String, required: true, unique: true },
  balance: { type: Number, default: 0 },
  bank: { type: Number, default: 0 },
  dailyClaimed: { type: Boolean, default: false },
  updatedAt: { type: Date, default: Date.now }
});

EconomySchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const EconomyModel = mongoose.models.Economy || mongoose.model("Economy", EconomySchema);
export default EconomyModel;
