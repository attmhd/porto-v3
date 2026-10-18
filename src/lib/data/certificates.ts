export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  description?: string;
  credentialUrl?: string;
  image?: string;
  /** Local path ('/certificates/x.pdf') or https URL; Drive share links are auto-converted */
  pdf?: string;
  skills: string[];
};

export const certificates: Certificate[] = [
  {
    id: 'its-python',
    title: 'ITS Python',
    issuer: 'Certiport',
    pdf: 'https://drive.google.com/file/d/1vxQaQQuCfa3g8Bnui-Zp7feS2vshnhJj/view?usp=sharing',
    skills: ['Python', 'Programming'],
  },
  {
    id: 'dev-certified-machine-learning-tensorflow',
    title: 'Dev Certified for Machine Learning with TensorFlow',
    issuer: 'Dev Certified',
    pdf: 'https://drive.google.com/file/d/1Ociwp3m0Tm0SfVJX13Zvp_aQs2Wbdml9/view?usp=sharing',
    skills: ['Machine Learning', 'TensorFlow', 'Python'],
  },
  {
    id: 'agile-scrum-fundamentals',
    title: 'Agile Scrum Fundamentals',
    issuer: 'MindMagine',
    pdf: 'https://drive.google.com/file/d/1s8TOSbyDPv16mI1iGBD3DFN6qPK5802w/view?usp=sharing',
    skills: ['Agile', 'Scrum', 'Team Collaboration'],
  },
];

export function getCertificateById(id: string): Certificate | undefined {
  return certificates.find((cert) => cert.id === id);
}

// Google Drive blocks /view links in iframes; /preview is the embeddable variant.
export function toEmbedUrl(url: string): string {
  return url.replace(/^(https:\/\/drive\.google\.com\/file\/d\/[^/]+)\/view.*$/, '$1/preview');
}
