import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";

export async function createTempFile(prefix, content, extension = "txt") {
  const filename = `${prefix}-${Date.now()}.${extension}`;
  const tempPath = path.join(os.tmpdir(), filename);
  await fs.writeFile(tempPath, content, "utf8");
  return tempPath;
}

export async function cleanupTempFile(filePath) {
  try {
    await fs.unlink(filePath);
  } catch {
    // ignore missing file
  }
}
