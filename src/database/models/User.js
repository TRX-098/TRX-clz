import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  jid: { type: String, required: true, unique: true },
  tier: { type: String, enum: ["owner", "admin", "premium", "basic"], default: "basic" },
  premiumExpiresAt: { type: Date, default: null },
  orderId: { type: String, default: null },
  createdAt: { type: Date, default: Date.now }
});

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
export default UserModel;
