import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const url = process.argv[2] || "http://localhost:3001";
const label = process.argv[3] || "full";

const outDir = "./temporary screenshots";
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const existing = fs.readdirSync(outDir).filter((f) => f.endsWith(".png"));
const numbers = existing.map((f) => parseInt(f.match(/^screenshot-(\d+)/)?.[1] || "0"));
const next = numbers.length ? Math.max(...numbers) + 1 : 1;
const filename = `screenshot-${next}-${label}.png`;
const outPath = path.join(outDir, filename);

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle2" });

// Dismiss splash by clicking "Découvrir"
try {
  await page.waitForSelector("button[aria-label='Découvrir le site']", { timeout: 3000 });
  await page.click("button[aria-label='Découvrir le site']");
  await new Promise(r => setTimeout(r, 1200));
} catch(e) {}

// Scroll through page to trigger IntersectionObserver animations
const totalHeight = await page.evaluate(() => document.body.scrollHeight);
let scrolled = 0;
while (scrolled < totalHeight) {
  scrolled += 600;
  await page.evaluate((y) => window.scrollTo(0, y), scrolled);
  await new Promise(r => setTimeout(r, 150));
}
// Scroll back to top
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise(r => setTimeout(r, 500));

await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved: ${outPath}`);
