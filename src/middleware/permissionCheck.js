import config from "../config.js";
import UserModel from "../database/models/User.js";

export async function checkPermission(sender, requiredTier) {
  const user = await UserModel.findOne({ jid: sender });
  if (!user) return requiredTier === "basic";
  if (requiredTier === "owner") return user.tier === "owner";
  if (requiredTier === "admin") return ["admin", "owner"].includes(user.tier);
  if (requiredTier === "premium") return ["premium", "admin", "owner"].includes(user.tier);
  return true;
}

export function formatPermissionError(requiredTier) {
  return `Akses ditolak. Dibutuhkan tier: ${requiredTier}`;
}
