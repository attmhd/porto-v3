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
    id: 'dev-certified-machine-learning-tensorflow',
    title: 'Dev Certified for Machine Learning with TensorFlow',
    issuer: 'Dev Certified',
    credentialUrl: 'https://dev.id/certificate/verify/JE0P36LW75',
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
  {
    id: 'its-python',
    title: 'ITS Python',
    issuer: 'Certiport',
    pdf: 'https://drive.google.com/file/d/1vxQaQQuCfa3g8Bnui-Zp7feS2vshnhJj/view?usp=sharing',
    skills: ['Python', 'Programming'],
  },
  {
    id: 'membangun-sistem-machine-learning',
    title: 'Membangun Sistem Machine Learning',
    issuer: 'Dicoding',
    issueDate: '12 Jul 2026',
    credentialUrl: 'https://www.dicoding.com/certificates/GRX5W742RZ0M',
    pdf: '/certificates/membangun-sistem-machine-learning.pdf',
    skills: ['Machine Learning', 'Python', 'Model Development'],
  },
  {
    id: 'penerapan-ai-di-aplikasi-web',
    title: 'Belajar Penerapan AI di Aplikasi Web',
    issuer: 'Dicoding',
    issueDate: '11 Jul 2026',
    credentialUrl: 'https://www.dicoding.com/certificates/6RPN7L1K4X2M',
    pdf: '/certificates/penerapan-ai-web.pdf',
    skills: ['Artificial Intelligence', 'Web Application', 'TensorFlow.js'],
  },
  {
    id: 'pengembangan-generative-ai-berbasis-llm',
    title: 'Pengembangan Generative AI berbasis LLM',
    issuer: 'Dicoding',
    issueDate: '10 Jul 2026',
    credentialUrl: 'https://www.dicoding.com/certificates/QLZ99LREDZ5D',
    pdf: '/certificates/pengembangan-gen-ai.pdf',
    skills: ['Generative AI', 'Large Language Models', 'Prompt Engineering'],
  },
  {
    id: 'machine-learning-specialization',
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI, Stanford Online',
    issueDate: '16 Oct 2024',
    credentialUrl: 'https://coursera.org/verify/specialization/S50WZI9OH8MW',
    pdf: '/certificates/Coursera S50WZI9OH8MW.pdf',
    skills: ['Machine Learning', 'Deep Learning', 'TensorFlow'],
  },
  {
    id: 'tensorflow',
    title: 'TensorFlow Developer Professional Certificate',
    issuer: 'DeepLearning.AI',
    issueDate: '29 Oct 2024',
    credentialUrl: 'https://coursera.org/verify/professional-cert/AP48WLAAEAR4',
    pdf: '/certificates/Coursera AP48WLAAEAR4.pdf',
    skills: ['Machine Learning', 'Deep Learning', 'TensorFlow'],
  },
  {
    id: 'python-os',
    title: 'Using Python to Interact with the Operating System',
    issuer: 'Google',
    issueDate: '14 Sep 2024',
    credentialUrl: 'https://coursera.org/verify/2W0RMCC082CU',
    pdf: '/certificates/Coursera 2W0RMCC082CU.pdf',
    skills: ['Python', 'Operating System'],
  },
  {
    id: 'intro-ml-aws',
    title: 'Introduction to Machine Learning on AWS',
    issuer: 'Amazon Web Services',
    issueDate: '7 May 2025',
    credentialUrl: 'https://coursera.org/verify/HPJ1XLP7BHDG',
    pdf: '/certificates/Coursera HPJ1XLP7BHDG.pdf',
    skills: ['Machine Learning', 'AWS SageMaker'],
  },
];

export function getCertificateById(id: string): Certificate | undefined {
  return certificates.find((cert) => cert.id === id);
}

// Google Drive blocks /view links in iframes; /preview is the embeddable variant.
export function toEmbedUrl(url: string): string {
  return url.replace(/^(https:\/\/drive\.google\.com\/file\/d\/[^/]+)\/view.*$/, '$1/preview');
}
