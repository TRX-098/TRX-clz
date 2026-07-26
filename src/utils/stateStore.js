import fs from "node:fs/promises";
import path from "node:path";

const dataDir = path.join(process.cwd(), "data");

async function ensureDir() {
  await fs.mkdir(dataDir, { recursive: true });
}

export async function readState(filename) {
  await ensureDir();
  const filePath = path.join(dataDir, filename);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw || "{}");
  } catch (error) {
    if (error.code === "ENOENT") return {};
    throw error;
  }
}

export async function writeState(filename, data) {
  await ensureDir();
  const filePath = path.join(dataDir, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
  return data;
}

export async function toggleState(filename, key, value) {
  const state = await readState(filename);
  state[key] = { ...state[key], ...value };
  await writeState(filename, state);
  return state[key];
}
