import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import config from "../config.js";
import MidtransService from "./MidtransService.js";
import logger from "../utils/logger.js";
import UserModel from "../database/models/User.js";

class WebhookServer {
  constructor(client) {
    this.client = client;
    this.midtrans = new MidtransService();
    this.app = express();
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(bodyParser.json());

    this.app.post("/midtrans-webhook", this.handleMidtransWebhook.bind(this));
  }

  async handleMidtransWebhook(req, res) {
    try {
      const notification = req.body;
      if (!this.midtrans.verifySignature(notification)) {
        logger.warn("Invalid Midtrans signature", { notification });
        return res.status(400).json({ status: "invalid signature" });
      }

      const { order_id: orderId, transaction_status: status, gross_amount: amount, customer_details: customer } = notification;
      if (status === "capture" || status === "settlement") {
        const existing = await UserModel.findOne({ orderId });
        if (existing) {
          existing.tier = "premium";
          existing.premiumExpiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
          await existing.save();
        }

        const userJid = `${customer.phone}@s.whatsapp.net`;
        await this.client.sendMessage(userJid, { text: `Pembayaran berhasil. Status premium Anda telah diperbarui.` });
        await this.client.sendMessage(config.OWNER_NUMBER + "@s.whatsapp.net", { text: `Midtrans payment sukses: Order ${orderId}, user ${customer.phone}, amount ${amount}` });
      }

      res.status(200).json({ status: "ok" });
    } catch (error) {
      logger.error("Webhook handling failed", { error });
      res.status(500).json({ status: "error" });
    }
  }

  start() {
    this.app.listen(config.WEBHOOK_PORT, () => {
      logger.info(`Webhook server running on port ${config.WEBHOOK_PORT}`);
    });
  }
}

export default WebhookServer;
