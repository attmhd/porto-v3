import { achievements } from '$lib/data/achievements';
import { products } from '$lib/data/products';
import { publications } from '$lib/data/publications';
import { projects } from '$lib/data/projects';

export function GET() {
  const paths = [
    '',
    'projects',
    'product',
    'certificates',
    ...achievements.map((achievement) => `achievements/${achievement.id}`),
    ...products.map((product) => `product/${product.id}`),
    ...publications.map((publication) => `publications/${publication.id}`),
    ...projects.map((project) => `projects/${project.id}`),
  ];
  const urls = paths.map((path) => `<url><loc>https://attmhd.me/${path}</loc></url>`).join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    },
  );
}
