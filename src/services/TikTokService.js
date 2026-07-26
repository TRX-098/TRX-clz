import fetch from "node-fetch";

class TikTokService {
  async search(query) {
    const response = await fetch(`https://www.tiktok.com/api/search/general/full/?query=${encodeURIComponent(query)}`);
    return await response.text();
  }

  async getInfo(url) {
    const response = await fetch(url);
    return { html: await response.text() };
  }

  async downloadVideo(url) {
    const response = await fetch(url);
    return { buffer: await response.arrayBuffer() };
  }

  async downloadAudio(url) {
    const response = await fetch(url);
    return { buffer: await response.arrayBuffer() };
  }

  async downloadNoWatermark(url) {
    const response = await fetch(url);
    return { buffer: await response.arrayBuffer() };
  }

  async getUserInfo(username) {
    const response = await fetch(`https://www.tiktok.com/@${encodeURIComponent(username)}`);
    return { html: await response.text() };
  }
}

export default TikTokService;
