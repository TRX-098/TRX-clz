import logger from "../utils/logger.js";

const bannedNumbers = new Set();

export function isBanned(number) {
  return bannedNumbers.has(number);
}

export function addBan(number) {
  bannedNumbers.add(number);
  logger.warn("Number banned", { number });
}

export function removeBan(number) {
  bannedNumbers.delete(number);
}
