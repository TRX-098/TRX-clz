import fs from "node:fs/promises";
import path from "node:path";
import CryptoJS from "crypto-js";
import { fileURLToPath } from "node:url";
import { useSingleFileAuthState } from "@whiskeysockets/baileys";
import config from "../config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sessionDirectory = path.join(__dirname, "../../sessions");
const authFilePath = path.join(sessionDirectory, "auth_info.json");
const encryptedFilePath = path.join(sessionDirectory, "auth_info.json.enc");

class SessionManager {
  static async initialize() {
    await fs.mkdir(sessionDirectory, { recursive: true });
    await SessionManager.restoreEncryptedSession();
    return useSingleFileAuthState(authFilePath);
  }

  static async restoreEncryptedSession() {
    try {
      await fs.access(authFilePath);
      return;
    } catch {
      try {
        await fs.access(encryptedFilePath);
        const encrypted = await fs.readFile(encryptedFilePath, "utf8");
        const bytes = CryptoJS.AES.decrypt(encrypted, config.SESSION_SECRET);
        const decryptedJson = bytes.toString(CryptoJS.enc.Utf8);
        if (decryptedJson) {
          await fs.writeFile(authFilePath, decryptedJson, "utf8");
        }
      } catch {
        return;
      }
    }
  }

  static async encryptSession() {
    try {
      const raw = await fs.readFile(authFilePath, "utf8");
      const encrypted = CryptoJS.AES.encrypt(raw, config.SESSION_SECRET).toString();
      await fs.writeFile(encryptedFilePath, encrypted, "utf8");
    } catch (error) {
      console.warn("Session encryption failed", error.message);
    }
  }
}

export default SessionManager;
