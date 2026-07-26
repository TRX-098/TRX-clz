import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema({
  jid: { type: String, required: true, unique: true },
  name: { type: String, default: "" },
  description: { type: String, default: "" },
  premiumExpiresAt: { type: Date, default: null },
  settings: { type: Object, default: {} },
  createdAt: { type: Date, default: Date.now }
});

const GroupModel = mongoose.models.Group || mongoose.model("Group", GroupSchema);
export default GroupModel;
