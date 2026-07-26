import mongoose from "mongoose";

const AnalyticsSchema = new mongoose.Schema({
  jid: { type: String, required: true },
  command: { type: String, required: true },
  category: { type: String, default: "unknown" },
  timestamp: { type: Date, default: Date.now }
});

const AnalyticsModel = mongoose.models.Analytics || mongoose.model("Analytics", AnalyticsSchema);
export default AnalyticsModel;
