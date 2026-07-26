import chokidar from "chokidar";
import { reloadCommands } from "./loadCommand.js";
import logger from "../utils/logger.js";

export function watchPlugins(client) {
  const watcher = chokidar.watch("./src/commands", {
    ignored: /(^|[\/\\])\../,
    persistent: true
  });

  watcher.on("change", async (path) => {
    logger.info(`[HOT-RELOAD] File changed: ${path}`);
    await reloadCommands(client);
  });
  watcher.on("add", async (path) => {
    logger.info(`[HOT-RELOAD] New file: ${path}`);
    await reloadCommands(client);
  });
  watcher.on("unlink", async (path) => {
    logger.info(`[HOT-RELOAD] File removed: ${path}`);
    await reloadCommands(client);
  });
}
