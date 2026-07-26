import { v4 as uuidv4 } from "uuid";
import MidtransService from "../../services/MidtransService.js";
import UserModel from "../../database/models/User.js";
import TransactionModel from "../../database/models/Transaction.js";

export default {
  name: "buypremium",
  alias: ["sewa", "bayarpremium"],
  category: "payment",
  tier: "basic",
  cooldown: 20,
  limit: 2,
  description: "Beli paket premium melalui Midtrans",
  usage: ".buypremium <durasi>",
  execute: async (m, { args, client, sender }) => {
    const duration = args[0] || "30d";
    const amount = 25000;
    const orderId = `troxzy-${uuidv4()}`;
    const midtrans = new MidtransService();
    const user = await UserModel.findOneAndUpdate({ jid: sender }, { jid: sender }, { upsert: true, new: true });

    const customerDetails = { first_name: sender.split("@")[0], phone: sender.replace("@s.whatsapp.net", "") };
    const itemDetails = [{ id: "premium_1", price: amount, quantity: 1, name: `Premium ${duration}` }];
    const response = await midtrans.createTransaction(orderId, amount, customerDetails, itemDetails);

    await TransactionModel.create({ orderId, jid: sender, amount, status: "pending" });
    user.orderId = orderId;
    await user.save();

    await client.sendMessage(m.key.remoteJid, { text: `Invoice premium dibuat. Silakan bayar melalui link berikut:\n${response.actions?.find((item) => item.name === "generate-qr-code")?.url || response.redirect_url || response.actions?.[0]?.url || "Tidak tersedia"}` });
  }
};
