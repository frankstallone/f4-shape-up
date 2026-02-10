import { mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

const SOURCE_ROOT = 'docs';
const TARGET_ROOT = 'src/content/docs';

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stats = statSync(full);
    if (stats.isDirectory()) out.push(...walk(full));
    else if (stats.isFile() && full.endsWith('.md')) out.push(full);
  }
  return out;
}

function toFrontmatterString(value) {
  return JSON.stringify(value);
}

function transformMarkdown(sourceText, fallbackTitle) {
  const lines = sourceText.split('\n');
  let title = fallbackTitle;
  let bodyStart = 0;

  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].startsWith('# ')) {
      title = lines[i].slice(2).trim();
      bodyStart = i + 1;
      break;
    }
  }

  let bodyLines = lines.slice(bodyStart);
  while (bodyLines.length > 0 && bodyLines[0].trim() === '') bodyLines.shift();
  const body = bodyLines.join('\n').trimEnd() + '\n';

  const frontmatter = [
    '---',
    `title: ${toFrontmatterString(title)}`,
    `description: ${toFrontmatterString(title)}`,
    '---',
    '',
  ].join('\n');

  return frontmatter + body;
}

rmSync(TARGET_ROOT, { recursive: true, force: true });
mkdirSync(TARGET_ROOT, { recursive: true });

const files = walk(SOURCE_ROOT);
for (const sourcePath of files) {
  const rel = relative(SOURCE_ROOT, sourcePath);
  const targetPath = join(TARGET_ROOT, rel);
  const fallbackTitle = rel.replace(/\.md$/, '').split('/').pop().replace(/-/g, ' ');
  const sourceText = readFileSync(sourcePath, 'utf8');
  const outText = transformMarkdown(sourceText, fallbackTitle);

  mkdirSync(dirname(targetPath), { recursive: true });
  writeFileSync(targetPath, outText);
}

console.log(`Synced ${files.length} files from ${SOURCE_ROOT} to ${TARGET_ROOT}.`);
