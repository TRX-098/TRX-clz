import crypto from "crypto";
import fetch from "node-fetch";
import sharp from "sharp";
import qrcode from "qrcode";
import { v4 as uuidv4 } from "uuid";
import fs from "node:fs/promises";

export function replyText(client, jid, text) {
  return client.sendMessage(jid, { text });
}

export function safeSplit(text, separator = " ") {
  return String(text).trim().split(separator).filter(Boolean);
}

export function randomPick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function toBase64(text) {
  return Buffer.from(String(text)).toString("base64");
}

export function fromBase64(encoded) {
  return Buffer.from(String(encoded), "base64").toString("utf8");
}

export async function generateQrData(text) {
  return new Promise((resolve, reject) => {
    qrcode.toDataURL(text, { errorCorrectionLevel: "H" }, (err, url) => {
      if (err) return reject(err);
      resolve(url);
    });
  });
}

export function computeHash(text, algorithm = "md5") {
  return crypto.createHash(algorithm).update(String(text)).digest("hex");
}

export function formatJson(jsonValue) {
  return JSON.stringify(jsonValue, null, 2);
}

export function numeric(value) {
  return Number(value) || 0;
}

export function uuid() {
  return uuidv4();
}

export async function getBuffer(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed fetch ${url}`);
  return Buffer.from(await response.arrayBuffer());
}

export async function resizeImage(buffer, width, height) {
  return await sharp(buffer).resize(width, height, { fit: "inside" }).toBuffer();
}

export async function blurImage(buffer, radius = 10) {
  return await sharp(buffer).blur(radius).toBuffer();
}

export async function convertToPng(buffer) {
  return await sharp(buffer).png().toBuffer();
}

export async function saveTempFile(buffer, extension = "tmp") {
  const filename = `temp-${Date.now()}-${Math.random().toString(16).slice(2)}.${extension}`;
  const path = `./temp/${filename}`;
  await fs.writeFile(path, buffer);
  return path;
}
