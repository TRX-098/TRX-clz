import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  jid: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: "pending" },
  provider: { type: String, default: "midtrans" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

TransactionSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const TransactionModel = mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
export default TransactionModel;
