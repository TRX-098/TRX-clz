import ytdl from "play-dl";
import fetch from "node-fetch";
import { getBuffer } from "../utils/commandHelper.js";

class DownloaderService {
  async youtube(url, quality = "360p", format = "mp4") {
    const info = await ytdl.video_info(url);
    const stream = await ytdl.stream(url, { quality });
    return { info, stream, format };
  }

  async tiktok(url) {
    const response = await fetch(`https://api.tiktokdownloader.org/api/convert?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    return data;
  }

  async instagram(url) {
    const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
    const html = await response.text();
    return { html }; 
  }

  async facebook(url) {
    const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
    const html = await response.text();
    return { html };
  }

  async twitter(url) {
    const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
    const html = await response.text();
    return { html };
  }

  async spotify(url) {
    const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
    return { text: await response.text() };
  }

  async soundcloud(url) {
    const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
    return { text: await response.text() };
  }

  async mediafire(url) {
    const response = await fetch(url);
    const html = await response.text();
    return { html };
  }
}

export default DownloaderService;
