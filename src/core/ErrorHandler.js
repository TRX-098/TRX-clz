import logger from "../utils/logger.js";

class ErrorHandler {
  static async capture(error, context = {}) {
    logger.error("TroxzyMD Error", { error: error?.stack || error, context });
    return { success: false, error: error?.message || "Unknown error" };
  }
}

export default ErrorHandler;
