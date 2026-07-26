import { getRedis } from "../database/connection.js";

export async function checkCooldown(sender, command) {
  const redis = getRedis();
  const cooldownKey = `cooldown:${sender}:${command}`;
  const remaining = await redis.ttl(cooldownKey);
  return remaining > 0 ? remaining : 0;
}

export async function applyCooldown(sender, command, seconds) {
  const redis = getRedis();
  await redis.set(`cooldown:${sender}:${command}`, "1", { EX: seconds });
}
