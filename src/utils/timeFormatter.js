import moment from "moment-timezone";
import config from "../config.js";

export function formatDate(date = new Date()) {
  return moment(date).tz(config.TIMEZONE).format("YYYY-MM-DD HH:mm:ss");
}

export function humanizeDuration(seconds) {
  const duration = moment.duration(seconds, "seconds");
  const parts = [];
  if (duration.days() > 0) parts.push(`${duration.days()}d`);
  if (duration.hours() > 0) parts.push(`${duration.hours()}h`);
  if (duration.minutes() > 0) parts.push(`${duration.minutes()}m`);
  if (duration.seconds() > 0) parts.push(`${duration.seconds()}s`);
  return parts.length ? parts.join(" ") : "0s";
}
