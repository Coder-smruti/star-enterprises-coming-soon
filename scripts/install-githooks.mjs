import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

// Skip on CI / non-git checkouts (GitHub Actions, etc.)
if (process.env.CI || process.env.GITHUB_ACTIONS) process.exit(0);

let root;
try {
  root = execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
} catch {
  process.exit(0);
}

const src = join(root, '.githooks', 'prepare-commit-msg');
const hooksDir = join(root, '.git', 'hooks');
const dest = join(hooksDir, 'prepare-commit-msg');

if (!existsSync(src) || !existsSync(join(root, '.git'))) process.exit(0);

mkdirSync(hooksDir, { recursive: true });
copyFileSync(src, dest);
