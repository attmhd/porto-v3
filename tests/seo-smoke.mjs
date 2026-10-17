import assert from 'node:assert/strict';

const base = process.env.SITE_URL ?? 'http://127.0.0.1:4173';
const sitemap = await fetch(`${base}/sitemap.xml`);
assert.equal(sitemap.status, 200);
assert.match(sitemap.headers.get('content-type'), /application\/xml/);
const xml = await sitemap.text();
const paths = [...xml.matchAll(/<loc>https:\/\/attmhd.me(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(paths.length, 22);
const titles = new Set();
for (const path of paths) {
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title, path);
  assert.ok(!titles.has(title), `Duplicate title: ${title}`);
  titles.add(title);
  assert.ok(html.includes(`rel="canonical" href="https://attmhd.me${path}"`), path);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  const schema = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
  assert.equal(JSON.parse(schema)['@context'], 'https://schema.org');
  if (path === '/') assert.ok(html.includes('href="/projects"'));
  if (path.startsWith('/projects/')) assert.match(html, /View Repository|Live Demo/);
}
for (const path of ['/missing-page', '/projects/missing-project', '/projects/project-mlops-thesis/extra']) {
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 404, path);
  assert.match(await response.text(), /noindex, follow/);
}
console.log(`SEO smoke passed: ${paths.length} server-rendered pages, unique metadata, valid JSON-LD, and real 404s.`);
