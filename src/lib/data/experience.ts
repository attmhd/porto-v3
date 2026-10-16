import logoAvenir from '$lib/assets/images/logo-avenir.png';
import logoOrbit from '$lib/assets/images/logo-orbit-future-academy.png';
import logoStifarm from '$lib/assets/images/logo-stifarm.png';
import logoAppskep from '$lib/assets/images/logo-appskep.jpeg';
import logoBangkit from '$lib/assets/images/logo-bangkit.png';

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
    role: 'Web Developer',
    type: 'Remote',
    logo: logoAvenir,
    period: 'Sep 2026',
    description:
      'Developed and maintained a Laravel web application by implementing features, fixing bugs, and improving application workflows. Improved role-based access and registration flows, troubleshot email-service issues, and implemented HTTP security headers that improved the SecurityHeaders.com evaluation from Grade F to Grade A.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Role-based Access', 'Security Headers']
  },
  {
    company: 'Orbit Future Academy',
    role: 'Cloud Computing Cohort',
    type: 'Remote',
    logo: logoOrbit,
    period: 'Mar 2026 - Jun 2026',
    description:
      'Completed hands-on training in cloud computing fundamentals, Linux, networking, databases, security, Python, and AWS technologies.',
    tags: ['AWS', 'Cloud Computing', 'Linux', 'Networking', 'Python', 'Databases']
  },
  {
    company: 'STIFARM Padang',
    role: 'Android Developer',
    type: 'Padang, Indonesia',
    period: 'Sep 2025 - Oct 2025',
    logo: logoStifarm,
    description:
      'Built an Android POS system using Kotlin and Jetpack Compose to digitize laboratory equipment and material usage transactions, replacing manual recording. Integrated PDF invoice generation and thermal receipt printing to streamline transaction documentation and reporting.',
    tags: ['Kotlin', 'Jetpack Compose', 'Android', 'POS', 'PDF', 'Thermal Printing']
  },
  {
    company: 'PT. Aplikasi Kriya Pratama',
    role: 'AI Intern',
    type: 'Padang, Indonesia',
    logo: logoAppskep,
    period: 'Jul 2025 - Sep 2025',
    description:
      'Designed and developed a Retrieval-Augmented Generation chatbot for contextual question answering from educational video content. Collaborated with the CTO on rapid prototyping and technical validation, integrating AI, backend, vector search, and caching components into a deployable architecture.',
    tags: ['RAG', 'Python', 'FastAPI', 'Qdrant', 'Redis', 'Docker']
  },
  {
    company: 'Bangkit Academy',
    role: 'Machine Learning Cohort',
    type: 'Remote',
    logo: logoBangkit,
    period: 'Sep 2024 - Dec 2024',
    description:
      'Google-backed program focused on machine learning, TensorFlow, and cloud deployment.',
    tags: ['Python', 'Machine Learning', 'Computer Vision', 'TensorFlow', 'Image Classification']
  }
];
