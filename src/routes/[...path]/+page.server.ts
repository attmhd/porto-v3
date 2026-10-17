import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
  const path = params.path ?? '';
  const sections = {
    '': { menu: 'Home', title: 'Muhammad Attan | Software Engineer', description: 'Muhammad Attan is a software engineer focused on backend systems, AI/ML, DevOps, MLOps, and practical digital products.' },
    projects: { menu: 'Projects', title: 'Projects | Muhammad Attan', description: 'Explore backend engineering, AI, machine learning, and MLOps projects by Muhammad Attan, with implementation details and source code.' },
    product: { menu: 'Product', title: 'Products | Muhammad Attan', description: 'Discover products currently being built by Muhammad Attan: cekrek.studio, nantee, and nattapos.' },
    certificates: { menu: 'Certificates', title: 'Certificates | Muhammad Attan', description: 'Professional certificates and credentials earned by Muhammad Attan in software engineering, cloud computing, and machine learning.' }
  } as const;
  if (Object.hasOwn(sections, path)) {
    return { ...sections[path as keyof typeof sections], project: null, canonical: `https://attmhd.me/${path}` };
  }
  const project = projects.find((item) => path === `projects/${item.id}`);
  if (!project) error(404, 'Page not found');
  return { menu: 'Projects' as const, title: `${project.title} | Muhammad Attan`, description: project.description, project, canonical: `https://attmhd.me/${path}` };
};
