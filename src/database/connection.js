import mongoose from "mongoose";
import { createClient } from "redis";
import logger from "../utils/logger.js";

let redisClient = null;

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
    logger.warn("[WARN] REDIS_URL kosong, bot berjalan tanpa cache.");
    redisClient = null;
    return false;
  }

  try {
    redisClient = createClient({ url: redisUrl });
    redisClient.on("error", (err) => {
      logger.warn("[WARN] Redis error, bot tetap jalan tanpa cache.");
    });
    await redisClient.connect();
    logger.info("Redis connected");
    return true;
  } catch (error) {
    logger.warn("[WARN] Redis connection failed, bot berjalan tanpa cache.", { error });
    redisClient = null;
    return false;
  }
}

export function getRedis() {
  if (!redisClient) {
    throw new Error("Redis client is not initialized");
  }
  return redisClient;
}
