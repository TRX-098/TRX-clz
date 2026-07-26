import fetch from "node-fetch";

class InstagramService {
  async search(query) {
    const response = await fetch(`https://www.instagram.com/web/search/topsearch/?query=${encodeURIComponent(query)}`);
    return await response.json();
  }

  async getPost(url) {
    const response = await fetch(url);
    return { html: await response.text() };
  }

  async getReel(url) {
    const response = await fetch(url);
    return { html: await response.text() };
  }

  async getStory(username) {
    const response = await fetch(`https://www.instagram.com/stories/${encodeURIComponent(username)}`);
    return { html: await response.text() };
  }

  async getUserInfo(username) {
    const response = await fetch(`https://www.instagram.com/${encodeURIComponent(username)}/?__a=1`);
    return await response.json();
  }
}

export default InstagramService;
