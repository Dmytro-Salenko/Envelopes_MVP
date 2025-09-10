// generate-sitemap.js
const fs = require("fs");

const base = "https://envelo.love";
const txt = fs.readFileSync("templates.js", "utf8");

const staticUrls = [
  `${base}/`,
  `${base}/faq.html`,
  `${base}/how-to-print.html`,
  `${base}/privacy.html`,
];

// ищем slug: '....' или "...."
const slugs = Array.from(txt.matchAll(/slug:\s*['"`]([^'"`]+)['"`]/g)).map(m => m[1]);

const urls = [...staticUrls, ...slugs.map(s => `${base}/templates/${s}`)];

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url><loc>${u}</loc></url>`).join("\n") +
  `\n</urlset>\n`;

fs.writeFileSync("sitemap.xml", xml, "utf8");
console.log(`sitemap.xml generated with ${urls.length} URLs`);
