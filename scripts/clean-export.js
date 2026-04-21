const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");

function walk(dir) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(full);
      continue;
    }
    if (!ent.isFile()) continue;

    const ext = path.extname(ent.name).toLowerCase();
    if (ext !== ".txt") continue;
    if (ent.name.toLowerCase() === "robots.txt") continue;

    fs.unlinkSync(full);
  }
}

if (!fs.existsSync(outDir)) {
  process.exit(0);
}

walk(outDir);
