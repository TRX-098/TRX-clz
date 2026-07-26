import mongoose from "mongoose";

const CommandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  response: { type: String, required: true },
  createdBy: { type: String, default: "system" },
  createdAt: { type: Date, default: Date.now }
});

const CommandModel = mongoose.models.Command || mongoose.model("Command", CommandSchema);
export default CommandModel;
