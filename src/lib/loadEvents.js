import fs from "node:fs/promises";
import path from "node:path";

export async function loadEvents(client) {
  const eventsDir = path.join(process.cwd(), "src/events");
  const files = await fs.readdir(eventsDir);
  for (const file of files.filter((f) => f.endsWith(".js"))) {
    const eventPath = path.join(eventsDir, file);
    const eventModule = await import(`../events/${file}`);
    if (eventModule.default) {
      // event modules are imported lazily in TroxzyClient
    }
  }
}
