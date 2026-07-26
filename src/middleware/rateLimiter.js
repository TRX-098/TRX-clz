import { getRedis } from "../database/connection.js";

export async function throttle(sender, limit, duration) {
  const redis = getRedis();
  const key = `rate:${sender}`;
  const current = await redis.incr(key);
  if (current === 1) {
    await redis.expire(key, duration);
  }
  return current <= limit;
}
