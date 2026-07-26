import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  jid: { type: String, required: true, unique: true },
  data: { type: Object, required: true },
  updatedAt: { type: Date, default: Date.now }
});

SessionSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const SessionModel = mongoose.models.Session || mongoose.model("Session", SessionSchema);
export default SessionModel;
