import ytdl from "play-dl";

class YouTubeService {
  async search(query) {
    return await ytdl.search(query, { source: "youtube" });
  }

  async getInfo(url) {
    return await ytdl.video_info(url);
  }

  async downloadAudio(url, quality = "highestaudio") {
    const stream = await ytdl.stream(url, { quality });
    return stream.stream;
  }

  async downloadVideo(url, quality = "highest" ) {
    const stream = await ytdl.stream(url, { quality });
    return stream.stream;
  }

  async getPlaylist(url) {
    const playlist = await ytdl.playlist_info(url, { source: "youtube" });
    return playlist;
  }

  async getTranscript(url) {
    return await ytdl.video_basic_info(url);
  }
}

export default YouTubeService;
