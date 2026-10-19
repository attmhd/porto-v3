import logoAvenir from '$lib/assets/images/logo-avenir.webp';
import logoOrbit from '$lib/assets/images/logo-orbit-future-academy.webp';
import logoStifarm from '$lib/assets/images/logo-stifarm.webp';
import logoAppskep from '$lib/assets/images/logo-appskep.webp';
import logoBangkit from '$lib/assets/images/logo-bangkit.webp';
import logoNatta from '$lib/assets/images/natta-icon.png';

export type ExperienceItem = {
  company: string;
  role: string;
  type: string;
  period: string;
  description: string[];
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
    description: [
      'Developed and maintained a Laravel web application by implementing features, fixing bugs, and improving application workflows.',
      'Improved role-based access and registration flows, and troubleshot email-service issues.',
      'Implemented HTTP security headers, improving the SecurityHeaders.com evaluation from Grade F to Grade A.',
    ],
    tags: ['Laravel', 'PHP', 'MySQL', 'Role-based Access', 'Security Headers'],
  },
  {
    company: 'Orbit Future Academy',
    role: 'AWS re/Start Trainee',
    type: 'Remote',
    logo: logoOrbit,
    period: 'Mar 2026 - Jun 2026',
    description: [
      'Completed the AWS re/Start cloud computing training program through Orbit Future Academy.',
      'Built foundational skills in AWS, Linux, networking, databases, security, and Python through hands-on learning.',
    ],
    tags: ['AWS', 'Cloud Computing', 'Linux', 'Networking', 'Python', 'Databases'],
  },
  {
    company: 'Natta Std',
    role: 'Product Wizard',
    type: 'Mini Digital Studio',
    logo: logoNatta,
    period: 'Oct 2025 - Present',
    description: [
      'Currently developing Natta POS, Natta NFC, and Natta SBC.',
      'Contribute to product planning and hands-on software development alongside the team.',
    ],
    tags: ['Product Development', 'Software Development', 'POS', 'NFC'],
  },
  {
    company: 'STIFARM Padang',
    role: 'Android Developer',
    type: 'Padang, Indonesia',
    period: 'Sep 2025 - Oct 2025',
    logo: logoStifarm,
    description: [
      'Built an Android POS system using Kotlin and Jetpack Compose for laboratory equipment and material usage transactions.',
      'Replaced manual transaction recording with a digital workflow.',
      'Integrated PDF invoice generation and thermal receipt printing for transaction documentation and reporting.',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'Android', 'POS', 'PDF', 'Thermal Printing'],
  },
  {
    company: 'PT. Aplikasi Kriya Pratama',
    role: 'AI Intern',
    type: 'Padang, Indonesia',
    logo: logoAppskep,
    period: 'Jul 2025 - Sep 2025',
    description: [
      'Designed and developed a RAG chatbot for contextual question answering from educational video content.',
      'Collaborated with the CTO on rapid prototyping and technical validation.',
      'Integrated AI, backend, vector search, and caching components into a deployable architecture.',
    ],
    tags: ['RAG', 'Python', 'FastAPI', 'Qdrant', 'Redis', 'Docker'],
  },
  {
    company: 'Bangkit Academy',
    role: 'Machine Learning Cohort',
    type: 'Remote',
    logo: logoBangkit,
    period: 'Sep 2024 - Dec 2024',
    description: [
      'Completed the intensive Machine Learning learning path in Bangkit Academy 2024, a Google-led program developed with Indonesia’s Ministry of Education, Culture, Research, and Technology.',
      'Studied Python, machine learning, TensorFlow, computer vision, and cloud deployment through more than 900 hours of technical learning, soft skills, English, and hands-on projects.',
      'Bangkit was supported by industry founding partners including GoTo and Traveloka.',
    ],
    tags: ['Python', 'Machine Learning', 'Computer Vision', 'TensorFlow', 'Image Classification'],
  },
];
