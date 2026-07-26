import mongoose from "mongoose";

const WarningSchema = new mongoose.Schema({
  jid: { type: String, required: true },
  warnings: { type: Number, default: 0 },
  reason: { type: String, default: "" },
  updatedAt: { type: Date, default: Date.now }
});

const WarningModel = mongoose.models.Warning || mongoose.model("Warning", WarningSchema);
export default WarningModel;
