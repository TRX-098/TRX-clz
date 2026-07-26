import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const commands = new Map();

function validateCommand(command, filePath) {
  const required = ["name", "alias", "category", "tier", "cooldown", "limit", "description", "usage", "execute"];
  for (const field of required) {
    if (command[field] === undefined) {
      throw new Error(`Command file ${filePath} is missing required field: ${field}`);
    }
  }
}

async function loadCommandFile(filePath) {
  const module = await import(pathToFileURL(filePath).href);
  const command = module.default;
  validateCommand(command, filePath);
  commands.set(command.name, command);
  for (const alias of command.alias || []) {
    if (!commands.has(alias)) {
      commands.set(alias, command);
    }
  }
}

async function loadDirectory(directory) {
  const items = await fs.readdir(directory);
  for (const item of items) {
    const itemPath = path.join(directory, item);
    const stats = await fs.stat(itemPath);
    if (stats.isDirectory()) {
      await loadDirectory(itemPath);
      continue;
    }
    if (item.endsWith(".js")) {
      await loadCommandFile(itemPath);
    }
  }
}

export async function loadCommands(client) {
  commands.clear();
  const commandDir = path.join(process.cwd(), "src/commands");
  await loadDirectory(commandDir);
  return commands;
}

export async function reloadCommands(client) {
  return await loadCommands(client);
}

export async function parseMessage(commandName) {
  const command = commands.get(commandName);
  return { command, path: commandName };
}

export function getCommands() {
  return Array.from(new Set(commands.values()));
}
