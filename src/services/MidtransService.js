import midtransClient from "midtrans-client";
import config from "../config.js";
import TransactionModel from "../database/models/Transaction.js";
import UserModel from "../database/models/User.js";
import logger from "../utils/logger.js";

class MidtransService {
  constructor() {
    this.core = new midtransClient.CoreApi({
      isProduction: false,
      serverKey: config.MIDTRANS_SERVER_KEY,
      clientKey: config.MIDTRANS_CLIENT_KEY
    });
  }

  async createTransaction(orderId, amount, customer, items) {
    const parameter = {
      transaction_details: { gross_amount: amount, order_id: orderId },
      customer_details: customer,
      item_details: items,
      enabled_payments: ["qris", "gopay", "shopeepay", "bca_va", "bni_va", "bri_va", "dana", "ovo", "credit_card"]
    };
    return await this.core.charge(parameter);
  }

  async chargeQris(orderId, amount, customer, items) {
    return await this.core.charge({
      payment_type: "qris",
      transaction_details: { gross_amount: amount, order_id: orderId },
      customer_details: customer,
      item_details: items
    });
  }

  async chargeVA(orderId, amount, customer, items, bank = "bca") {
    return await this.core.charge({
      payment_type: "bank_transfer",
      transaction_details: { gross_amount: amount, order_id: orderId },
      customer_details: customer,
      item_details: items,
      bank_transfer: { bank }
    });
  }

  async chargeEWallet(orderId, amount, customer, items, ewalletType = "gopay") {
    return await this.core.charge({
      payment_type: ewalletType,
      transaction_details: { gross_amount: amount, order_id: orderId },
      customer_details: customer,
      item_details: items
    });
  }

  async chargeCreditCard(orderId, amount, customer, items, tokenId) {
    return await this.core.charge({
      payment_type: "credit_card",
      transaction_details: { gross_amount: amount, order_id: orderId },
      customer_details: customer,
      item_details: items,
      credit_card: { token_id: tokenId, authentication: true }
    });
  }

  async checkStatus(orderId) {
    return await this.core.transaction.status(orderId);
  }

  verifySignature(notification) {
    const { order_id: orderId, status_code: statusCode, gross_amount: grossAmount, signature_key: signatureKey } = notification;
    const crypto = require("crypto");
    const hash = crypto.createHash("sha512").update(orderId + statusCode + grossAmount + config.MIDTRANS_SERVER_KEY).digest("hex");
    return hash === signatureKey;
  }

  async handleWebhook(notificationBody) {
    if (!this.verifySignature(notificationBody)) {
      logger.warn("Invalid Midtrans signature", { notificationBody });
      return { status: "invalid" };
    }

    const orderId = notificationBody.order_id;
    const transaction = await TransactionModel.findOne({ orderId });
    if (!transaction) {
      logger.warn("Transaction not found", { orderId });
      return { status: "not_found" };
    }

    transaction.status = notificationBody.transaction_status;
    await transaction.save();

    if (["capture", "settlement"].includes(notificationBody.transaction_status)) {
      await this.autoUpdateTier(orderId);
    }

    return { status: "handled" };
  }

  async autoUpdateTier(orderId) {
    const transaction = await TransactionModel.findOne({ orderId });
    if (!transaction) return null;
    const user = await UserModel.findOne({ jid: transaction.jid });
    if (!user) return null;
    user.tier = "premium";
    user.premiumExpiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    await user.save();
    await this.sendNotificationToUser(user.jid, `Pembayaran berhasil. Status premium aktif sampai ${user.premiumExpiresAt.toLocaleString("id-ID")}`);
    await this.sendNotificationToOwner(`Midtrans order ${orderId} berhasil untuk ${user.jid}`);
    return user;
  }

  async sendNotificationToUser(jid, text) {
    logger.info(`Notify user ${jid}`, { text });
    return { jid, text };
  }

  async sendNotificationToOwner(text) {
    logger.info(`Notify owner`, { text });
    return { text };
  }
}

export default MidtransService;
