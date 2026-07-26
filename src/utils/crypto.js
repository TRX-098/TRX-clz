import CryptoJS from "crypto-js";

export function encryptText(payload, secret) {
  return CryptoJS.AES.encrypt(payload, secret).toString();
}

export function decryptText(payload, secret) {
  try {
    const bytes = CryptoJS.AES.decrypt(payload, secret);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch {
    return null;
  }
}
