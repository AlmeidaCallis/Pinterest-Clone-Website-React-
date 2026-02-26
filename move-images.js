const fs = require('fs').promises;
const path = require('path');

const projectRoot = __dirname;
const destDir = path.join(projectRoot, 'public', 'assets');

const files = [
  'download (2).jpg',
  'Vincent van Gogh.jpg',
  'Georges Antoni Latest Editorial for Harper\'s Bazaar Australia _ Fashion Editorials.jpg',
  'Fastfood Photos - Download Free High-Quality Pictures _ Freepik.jpg'
];

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (e) {
    // ignore
  }
}

async function moveFile(name) {
  const src = path.join(projectRoot, name);
  const dest = path.join(destDir, name);
  try {
    await fs.rename(src, dest);
    console.log(`Moved: ${name}`);
  } catch (err) {
    if (err.code === 'EXDEV') {
      // cross-device, fallback to copy+unlink
      await fs.copyFile(src, dest);
      await fs.unlink(src);
      console.log(`Copied and removed (cross-device): ${name}`);
    } else if (err.code === 'ENOENT') {
      console.warn(`Not found: ${name}`);
    } else {
      console.error(`Failed to move ${name}:`, err.message);
    }
  }
}

async function run() {
  await ensureDir(destDir);
  for (const f of files) {
    await moveFile(f);
  }
  console.log('Done. Verify files in public/assets/');
}

run().catch(err => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
