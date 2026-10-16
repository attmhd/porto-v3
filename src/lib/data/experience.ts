export type ExperienceItem = {
  company: string;
  role: string;
  type: string;
  period: string;
  description: string;
  tags: string[];
  logo?: string;
};

export const experiences: ExperienceItem[] = [
  {
    company: 'PT. Avenir Fortuna Corporindo',
    role: 'Web Developer (Freelance)',
    type: 'Remote',
    logo: 'src/lib/assets/images/logo-avenir.png',
    period: 'Sep 2026',
    description:
      'Developed and maintained a Laravel web application by implementing features, fixing bugs, and improving application workflows. Improved role-based access and registration flows, troubleshot email-service issues, and implemented HTTP security headers that improved the SecurityHeaders.com evaluation from Grade F to Grade A.',
    tags: ['Laravel', 'PHP', 'Role-based Access', 'Security Headers']
  },
  {
    company: 'PT. Aplikasi Kriya Pratama',
    role: 'AI Intern',
    type: 'Padang, Indonesia',
    logo: 'src/lib/assets/images/logo-appskep.jpeg',
    period: 'Jul 2025 - Sep 2025',
    description:
      'Designed and developed a Retrieval-Augmented Generation chatbot for contextual question answering from educational video content. Collaborated with the CTO on rapid prototyping and technical validation, integrating AI, backend, vector search, and caching components into a deployable architecture.',
    tags: ['RAG', 'Python', 'Backend', 'Vector Search', 'Caching']
  },
  {
    company: 'Bangkit Academy',
    role: 'Machine Learning Cohort',
    type: 'Remote',
    logo: 'src/lib/assets/images/logo-lookin.png',
    period: 'Sep 2024 - Dec 2024',
    description:
      'Google-backed program focused on machine learning, TensorFlow, and cloud deployment.',
    tags: ['Machine Learning', 'Computer Vision', 'TensorFlow', 'Image Classification']
  }
];
