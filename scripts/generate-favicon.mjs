import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const inputPath = join(root, 'public/images/Data-Megathos-new-logo1.jpg');

// Generate multiple sizes for the favicon
async function generateFavicon() {
  // Generate ICO-compatible PNG at 32x32 (standard favicon size)
  // Must be RGBA (4 channels) for Next.js/Turbopack compatibility
  const png32 = await sharp(inputPath)
    .resize(32, 32, { fit: 'cover' })
    .ensureAlpha()
    .png()
    .toBuffer();

  // Build a minimal ICO file with the 32x32 PNG
  // ICO format: 6-byte header + 16-byte directory entry + PNG data
  const iconDir = Buffer.alloc(6);
  iconDir.writeUInt16LE(0, 0);     // Reserved
  iconDir.writeUInt16LE(1, 2);     // Type: 1 = ICO
  iconDir.writeUInt16LE(1, 4);     // Number of images

  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0);         // Width
  entry.writeUInt8(32, 1);         // Height
  entry.writeUInt8(0, 2);          // Color palette
  entry.writeUInt8(0, 3);          // Reserved
  entry.writeUInt16LE(1, 4);       // Color planes
  entry.writeUInt16LE(32, 6);      // Bits per pixel
  entry.writeUInt32LE(png32.length, 8);  // Image size
  entry.writeUInt32LE(22, 12);     // Offset (6 + 16 = 22)

  const ico = Buffer.concat([iconDir, entry, png32]);
  writeFileSync(join(root, 'app/favicon.ico'), ico);

  // Also generate apple-touch-icon and other sizes
  await sharp(inputPath)
    .resize(180, 180, { fit: 'cover' })
    .png()
    .toFile(join(root, 'public/apple-touch-icon.png'));

  await sharp(inputPath)
    .resize(192, 192, { fit: 'cover' })
    .png()
    .toFile(join(root, 'public/icon-192.png'));

  console.log('✓ Generated app/favicon.ico (32x32)');
  console.log('✓ Generated public/apple-touch-icon.png (180x180)');
  console.log('✓ Generated public/icon-192.png (192x192)');
}

generateFavicon().catch(console.error);
