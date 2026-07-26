import AIService from "../services/AIService.js";
import logger from "../utils/logger.js";

class HybridEngine {
  constructor() {
    this.aiService = new AIService();
  }

  async processChat(input) {
    try {
      const response = await this.aiService.chat([{ role: "user", content: input }]);
      return response;
    } catch (error) {
      logger.error("HybridEngine AI chat failed", { error });
      throw error;
    }
  }
}

export default HybridEngine;
