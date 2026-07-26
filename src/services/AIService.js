import fetch from "node-fetch";
import config from "../config.js";

class AIService {
  constructor() {
    this.baseUrl = config.AI_BASE_URL;
    this.apiKey = config.AI_API_KEY;
    this.memory = new Map();
    this.models = {
      chat: "gpt-4o",
      image: "dall-e-3",
      vision: "gpt-4o",
      code: "gpt-4o",
      voice: "tts-1",
      translate: "gpt-4o"
    };
  }

  async fetchJson(path, body) {
    const url = `${this.baseUrl}${path}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`AI API error ${response.status}: ${text}`);
    }
    return await response.json();
  }

  async chat(messages, model = this.models.chat, userId = "default") {
    const memory = this.memory.get(userId) || [];
    const payload = {
      model,
      messages: [...memory, ...messages],
      temperature: 0.7
    };
    const response = await this.fetchJson("/chat/completions", payload);
    const answer = response.choices?.[0]?.message;
    if (answer) {
      this.memory.set(userId, [...memory, ...messages, answer].slice(-20));
    }
    return response;
  }

  async generateImage(prompt, size = "1024x1024") {
    return await this.fetchJson("/images/generations", { prompt, n: 1, size });
  }

  async vision(base64Image, prompt) {
    return await this.fetchJson("/chat/completions", {
      model: this.models.vision,
      messages: [
        { role: "user", content: [{ type: "text", text: prompt }, { type: "image_url", image_url: { url: `data:image/jpeg;base64,${base64Image}` } }] }
      ]
    });
  }

  async codeGenerate(language, prompt) {
    return await this.fetchJson("/chat/completions", {
      model: this.models.code,
      messages: [{ role: "user", content: `Write ${language} code for: ${prompt}` }]
    });
  }

  async tts(text, voice = "alloy") {
    const response = await fetch(`${this.baseUrl}/audio/speech`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({ model: this.models.voice, input: text, voice })
    });
    if (!response.ok) {
      const textBody = await response.text();
      throw new Error(`TTS failed: ${response.status} ${textBody}`);
    }
    return Buffer.from(await response.arrayBuffer());
  }

  async translate(text, from = "auto", to = "id") {
    const prompt = `Translate the following text from ${from} to ${to}: ${text}`;
    const response = await this.chat([{ role: "user", content: prompt }], this.models.translate, `translate-${from}-${to}`);
    return response.choices?.[0]?.message?.content;
  }

  async summarize(text) {
    const prompt = `Summarize the following text in Indonesian: ${text}`;
    const response = await this.chat([{ role: "user", content: prompt }], this.models.chat, "summarize");
    return response.choices?.[0]?.message?.content;
  }

  streamingSimulation(text) {
    const chunks = [];
    let current = "";
    text.split(" ").forEach((word, index) => {
      current += `${word} `;
      if ((index + 1) % 8 === 0) {
        chunks.push(current.trim());
        current = "";
      }
    });
    if (current) chunks.push(current.trim());
    return chunks;
  }
}

export default AIService;
