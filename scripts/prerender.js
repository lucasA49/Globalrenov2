// Prérendu GEO : lancé après `vite build` (voir "build" dans package.json).
// - dist/index.html, dist/services.html… : HTML complet de chaque page publique
// - dist/spa.html : coquille vide pour les autres routes (blog, admin, 404)
// - fiche entreprise JSON-LD injectée dans le <head> de toutes les pages
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, routes, businessSchema } = await import(pathToFileURL(ssrEntry).href);

const businessJsonLd = `<script type="application/ld+json">${JSON.stringify(businessSchema())}</script>`;

let template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
template = template.replace('</head>', `    ${businessJsonLd}\n  </head>`);
fs.writeFileSync(path.join(dist, 'spa.html'), template);

// React 19 rend <title>/<meta>/<link>/JSON-LD là où ils sont déclarés :
// on les remonte dans le <head>, marqués data-prerender pour que main.jsx
// les retire avant que React ne remette les siens (évite les doublons).
const HEAD_TAG = /<title>[\s\S]*?<\/title>|<meta [^>]*?\/?>|<link rel="canonical"[^>]*?\/?>|<script type="application\/ld\+json">[\s\S]*?<\/script>/g;

for (const url of Object.keys(routes)) {
  let body = render(url);
  const head = [];
  body = body.replace(HEAD_TAG, (tag) => {
    head.push(tag.replace(/^<(\w+)/, '<$1 data-prerender'));
    return '';
  });

  const html = template
    .replace(/<meta data-prerender name="description"[^>]*>\s*/, '')
    .replace(/<title[^>]*>[\s\S]*?<\/title>/, head.join('\n    '))
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), html);
  console.log(`✓ prérendu ${url} → dist/${file} (${(html.length / 1024).toFixed(0)} ko)`);
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
