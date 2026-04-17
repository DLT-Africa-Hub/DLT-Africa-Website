/**
 * Runs `node --check` on every .js file under the backend root (excluding node_modules).
 * Use in CI / before deploy — no DB or env vars required.
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SKIP = new Set(["node_modules", ".git"]);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP.has(entry.name)) continue;
      walk(full, files);
    } else if (entry.isFile() && entry.name.endsWith(".js")) {
      files.push(full);
    }
  }
  return files;
}

const files = walk(ROOT);
let failed = false;

for (const file of files) {
  try {
    execSync(`node --check "${file}"`, { stdio: "pipe" });
  } catch {
    console.error(`Syntax error: ${path.relative(ROOT, file)}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log(`Syntax OK (${files.length} JavaScript files).`);
