import mongoose from "mongoose";
import { createClient } from "redis";
import logger from "../utils/logger.js";

let redisClient;

export async function connectMongo(mongoUrl) {
  if (!mongoUrl) {
    logger.warn("MONGODB_URL is not set. MongoDB integration disabled.");
    return false;
  }

  try {
    await mongoose.connect(mongoUrl, {
      dbName: "troxzymd",
      autoIndex: true,
      serverSelectionTimeoutMS: 5000
    });
    logger.info("MongoDB connected");
    return true;
  } catch (error) {
    logger.warn("MongoDB connection failed", { error });
    return false;
  }
}

export async function connectRedis(redisUrl) {
  if (!redisUrl) {
    logger.warn("REDIS_URL is not set. Redis integration disabled.");
    return false;
  }

  try {
    redisClient = createClient({ url: redisUrl });
    redisClient.on("error", (error) => logger.error("Redis Error", { error }));
    await redisClient.connect();
    logger.info("Redis connected");
    return true;
  } catch (error) {
    logger.warn("Redis connection failed", { error });
    return false;
  }
}

export function getRedis() {
  if (!redisClient) {
    throw new Error("Redis client is not initialized");
  }
  return redisClient;
}
