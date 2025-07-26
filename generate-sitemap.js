const fs = require('fs');
const path = require('path');

// Путь к templates.js
const templatesPath = path.join(__dirname, 'templates.js');
const rawTemplates = fs.readFileSync(templatesPath, 'utf8');

// Регулярка для извлечения id
const regex = /id:\s*["']([a-f0-9]{32})["']/g;

const today = new Date().toISOString().split('T')[0];
const baseUrl = 'https://envelo.love';

// Извлекаем все ID шаблонов
const templateIds = [];
let match;
while ((match = regex.exec(rawTemplates)) !== null) {
  templateIds.push(match[1]);
}

// Генерируем блоки URL
const templateUrls = templateIds.map(id => `
  <url>
    <loc>${baseUrl}/template.html?design=${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);

const staticUrls = [
  '/',
  '/privacy.html',
  '/faq.html',
  '/thankyou.html',
  '/thanks.html'
].map(p => `
  <url>
    <loc>${baseUrl}${p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...templateUrls].join('\n')}
</urlset>`;

// Сохраняем файл
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap.trim());

console.log(`✅ sitemap.xml создан: ${templateIds.length} шаблонов включено`);
