// Renders every built guide page in dist/ to dist/pdfs/<slug>.pdf using headless Chrome.
// Run after `astro build`. Set PUPPETEER_EXECUTABLE_PATH to point at a Chrome/Chromium binary.
import { createServer } from 'node:http';
import { existsSync } from 'node:fs';
import { mkdir, readdir, readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import puppeteer from 'puppeteer-core';

const DIST = new URL('../dist/', import.meta.url).pathname;
const GUIDES = join(DIST, 'guides');
const OUT = join(DIST, 'pdfs');

const CHROME_CANDIDATES = [
	process.env.PUPPETEER_EXECUTABLE_PATH,
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	'/Applications/Chromium.app/Contents/MacOS/Chromium',
	'/usr/bin/chromium-browser',
	'/usr/bin/chromium',
	'/usr/bin/google-chrome',
];

const MIME = {
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'text/javascript',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.ico': 'image/x-icon',
	'.ttf': 'font/ttf',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2',
	'.webp': 'image/webp',
};

const executablePath = CHROME_CANDIDATES.find((p) => p && existsSync(p));
if (!executablePath) {
	console.error('build-pdfs: no Chrome/Chromium found. Set PUPPETEER_EXECUTABLE_PATH.');
	process.exit(1);
}

// Minimal static server for dist/ so absolute asset paths resolve.
const server = createServer(async (req, res) => {
	let path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
	if (path.endsWith('/')) path += 'index.html';
	try {
		const body = await readFile(join(DIST, path));
		res.writeHead(200, { 'Content-Type': MIME[extname(path)] ?? 'application/octet-stream' });
		res.end(body);
	} catch {
		res.writeHead(404).end();
	}
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;

const slugs = (await readdir(GUIDES, { withFileTypes: true }))
	.filter((d) => d.isDirectory())
	.map((d) => d.name);

await mkdir(OUT, { recursive: true });
const browser = await puppeteer.launch({ executablePath, args: ['--no-sandbox'] });
try {
	const page = await browser.newPage();
	for (const slug of slugs) {
		await page.goto(`${base}/guides/${slug}/`, { waitUntil: 'networkidle0', timeout: 60_000 });
		await page.pdf({
			path: join(OUT, `${slug}.pdf`),
			format: 'A4',
			printBackground: true,
			margin: { top: '18mm', bottom: '18mm', left: '16mm', right: '16mm' },
		});
		console.log(`build-pdfs: pdfs/${slug}.pdf`);
	}
} finally {
	await browser.close();
	server.close();
}
