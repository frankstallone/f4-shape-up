import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stats = statSync(path);
    if (stats.isDirectory()) {
      out.push(...walk(path));
    } else if (stats.isFile() && path.endsWith('.md')) {
      out.push(path);
    }
  }
  return out;
}

const files = walk('src/content/docs');
const problems = [];

for (const file of files) {
  const lines = readFileSync(file, 'utf8').split('\n');
  let prevLevel = 1; // Page title is rendered as h1 by Starlight.

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const match = /^(#{1,6})\s+/.exec(line);
    if (!match) continue;

    const level = match[1].length;
    if (level === 1) {
      problems.push(`${file}:${i + 1} uses h1 in markdown body`);
    }
    if (level > prevLevel + 1) {
      problems.push(`${file}:${i + 1} skips heading level (h${prevLevel} -> h${level})`);
    }
    prevLevel = level;
  }
}

if (problems.length > 0) {
  console.error('Heading structure check failed:\n');
  for (const line of problems) console.error(`- ${line}`);
  process.exit(1);
}

console.log(`Heading structure check passed for ${files.length} files.`);
