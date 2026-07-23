import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const cwd = path.join(root, "..");
const url = "http://localhost:3000/bootcamp/";

const next = spawn("npx", ["next", "dev"], {
  cwd,
  stdio: "inherit",
  shell: true,
});

const openTimer = setTimeout(() => {
  const opener =
    process.platform === "darwin"
      ? ["open", url]
      : process.platform === "win32"
        ? ["cmd", "/c", "start", "", url]
        : ["xdg-open", url];

  spawn(opener[0], opener.slice(1), {
    stdio: "ignore",
    detached: true,
    shell: process.platform === "win32",
  }).unref();
}, 4000);

const shutdown = (code = 0) => {
  clearTimeout(openTimer);
  process.exit(code);
};

next.on("exit", (code) => shutdown(code ?? 0));
process.on("SIGINT", () => {
  next.kill("SIGINT");
});
process.on("SIGTERM", () => {
  next.kill("SIGTERM");
});
