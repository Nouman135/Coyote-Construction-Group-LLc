import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const src = path.join(publicDir, "trust-contractors-logo.png");

const hut = await sharp(src)
  .extract({ left: 40, top: 40, width: 260, height: 170 })
  .trim({ threshold: 10 })
  .toBuffer({ resolveWithObject: true });

const meta = hut.info;
const size = Math.max(meta.width, meta.height);
const padLeft = Math.floor((size - meta.width) / 2);
const padTop = Math.floor((size - meta.height) / 2);

const square = await sharp(hut.data)
  .extend({
    top: padTop,
    bottom: size - meta.height - padTop,
    left: padLeft,
    right: size - meta.width - padLeft,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

const outputs = [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["favicon.png", 32],
  ["apple-touch-icon.png", 180],
  ["icon-192x192.png", 192],
  ["icon-512x512.png", 512],
];

for (const [filename, dimension] of outputs) {
  await sharp(square)
    .resize(dimension, dimension, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(path.join(publicDir, filename));
}

const svgBase64 = square.toString("base64");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" role="img" aria-label="Trust Contractors Inc">
  <image href="data:image/png;base64,${svgBase64}" width="${size}" height="${size}" />
</svg>`;

await import("fs/promises").then(({ writeFile }) =>
  writeFile(path.join(publicDir, "favicon.svg"), svg, "utf8"),
);

console.log(`Generated favicons from hut crop (${meta.width}x${meta.height}).`);
