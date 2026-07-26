import sharp from "sharp";
import fs from "node:fs/promises";

class StickerService {
  async imageToSticker(buffer) {
    return await sharp(buffer).resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  }

  async videoToSticker(buffer) {
    return buffer;
  }

  async gifToSticker(buffer) {
    return buffer;
  }

  async stickerToImage(buffer) {
    return await sharp(buffer).png().toBuffer();
  }

  async stickerToVideo(buffer) {
    return buffer;
  }

  async textToSticker(text, options = {}) {
    const svg = `<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg"><rect width="512" height="512" rx="64" ry="64" fill="#000" opacity="0.7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="48" fill="#fff">${text}</text></svg>`;
    return await sharp(Buffer.from(svg)).png().toBuffer();
  }

  async cropCircle(buffer) {
    const image = sharp(buffer).resize(512, 512);
    const circle = Buffer.from(`<svg><circle cx="256" cy="256" r="256"/></svg>`);
    return await image.composite([{ input: circle, blend: "dest-in" }]).png().toBuffer();
  }

  async cropSquircle(buffer) {
    const image = sharp(buffer).resize(512, 512);
    const squircle = Buffer.from(`<svg><rect x="0" y="0" width="512" height="512" rx="128" ry="128"/></svg>`);
    return await image.composite([{ input: squircle, blend: "dest-in" }]).png().toBuffer();
  }

  async addTextToSticker(buffer, text) {
    return await this.textToSticker(text);
  }

  async removeBg(buffer) {
    return buffer;
  }
}

export default StickerService;
