import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
    trace: 4
  },
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    format.splat(),
    format.printf(({ timestamp, level, message, ...meta }) => {
      const metaString = Object.keys(meta).length ? JSON.stringify(meta) : "";
      return `${timestamp} [${level.toUpperCase()}] ${message} ${metaString}`;
    })
  ),
  transports: [new transports.Console()]
});

// Ensure trace method exists for baileys compatibility
if (!logger.trace) {
  logger.trace = logger.debug;
}

export default logger;
