import config from "../config.js";
import { getRedis } from "../database/connection.js";
import UserModel from "../database/models/User.js";

export async function ensureUser(sender) {
  const user = await UserModel.findOneAndUpdate({ jid: sender }, { jid: sender }, { upsert: true, new: true });
  return user;
}

export async function isAllowed(command, user) {
  if (!user) return command.tier === "basic";
  if (command.tier === "owner") return user.tier === "owner";
  if (command.tier === "admin") return ["admin", "owner"].includes(user.tier);
  if (command.tier === "premium") return ["premium", "admin", "owner"].includes(user.tier);
  return true;
}

export async function checkCooldown(sender, command) {
  const redis = getRedis();
  const key = `cooldown:${sender}:${command.name}`;
  const remaining = await redis.ttl(key);
  return remaining > 0 ? remaining : 0;
}

export async function setCooldown(sender, command) {
  const redis = getRedis();
  const key = `cooldown:${sender}:${command.name}`;
  await redis.set(key, "1", { EX: command.cooldown });
}

export async function getPrefix() {
  return config.PREFIX;
}
