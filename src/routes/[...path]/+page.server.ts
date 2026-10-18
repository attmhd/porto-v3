import { achievements } from '$lib/data/achievements';
import { error } from '@sveltejs/kit';
import { products } from '$lib/data/products';
import { projects } from '$lib/data/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
  const path = params.path ?? '';
  const sections = {
    '': {
      menu: 'Home',
      title: 'Muhammad Attan | Software Engineer',
      description:
        'Muhammad Attan is a software engineer focused on backend systems, AI/ML, DevOps, MLOps, and practical digital products.',
    },
    projects: {
      menu: 'Projects',
      title: 'Projects | Muhammad Attan',
      description:
        'Explore backend engineering, AI, machine learning, and MLOps projects by Muhammad Attan, with implementation details and source code.',
    },
    product: {
      menu: 'Product',
      title: 'Products | Muhammad Attan',
      description:
        'Explore cekrek.studio, Nantee digital invitations, and Natta POS: practical products for celebrations and everyday business.',
    },
    certificates: {
      menu: 'Certificates',
      title: 'Certificates | Muhammad Attan',
      description:
        'Professional certificates and credentials earned by Muhammad Attan in software engineering, cloud computing, and machine learning.',
    },
  } as const;
  if (Object.hasOwn(sections, path)) {
    return {
      ...sections[path as keyof typeof sections],
      project: null,
      product: null,
      achievement: null,
      canonical: `https://attmhd.me/${path}`,
    };
  }
  const achievement = achievements.find((item) => path === `achievements/${item.id}`);
  if (achievement)
    return {
      menu: 'Home' as const,
      title: `${achievement.projectName} — ${achievement.title} | Muhammad Attan`,
      description: achievement.summary,
      project: null,
      product: null,
      achievement,
      canonical: `https://attmhd.me/${path}`,
    };
  const product = products.find((item) => path === `product/${item.id}`);
  if (product)
    return {
      menu: 'Product' as const,
      title: `${product.title} | Muhammad Attan`,
      description: product.description,
      project: null,
      product,
      achievement: null,
      canonical: `https://attmhd.me/${path}`,
    };
  const project = projects.find((item) => path === `projects/${item.id}`);
  if (!project) error(404, 'Page not found');
  return {
    menu: 'Projects' as const,
    title: `${project.title} | Muhammad Attan`,
    description: project.description,
    project,
    product: null,
    achievement: null,
    canonical: `https://attmhd.me/${path}`,
  };
};
