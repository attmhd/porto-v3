export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  credentialUrl?: string;
  image?: string;
  skills: string[];
};

export const certificates: Certificate[] = [
  {
    id: 'cescam-conference-2025',
    title: '4th Biennial CESCam Conference Presenter',
    issuer: 'CESCam & CamTech University',
    issueDate: '2025',
    description: 'Awarded for active participation and technical presentation on educational innovation and technological development at CamTech University, Cambodia.',
    credentialUrl: 'https://itp.ac.id/assets/images/img_blog/2025/250522041528.jpg',
    image: 'https://itp.ac.id/assets/images/img_blog/2025/250522041528.jpg',
    skills: ['Technical Presentation', 'AI in Education', 'Research']
  },
  {
    id: 'international-student-exchange-camtech',
    title: 'International Student Mobility & Academic Exchange',
    issuer: 'CamTech University, Cambodia',
    issueDate: '2025',
    description: 'Completed international academic exchange program focusing on advanced software engineering and technology innovation.',
    credentialUrl: 'https://itp.ac.id/assets/images/img_blog/2025/250522041528.jpg',
    skills: ['Software Engineering', 'Cross-cultural Collaboration', 'System Design']
  },
  {
    id: 'machine-learning-specialization',
    title: 'Machine Learning & Deep Learning Practitioner',
    issuer: 'DeepLearning.AI / Coursera',
    issueDate: '2024',
    description: 'Comprehensive certification covering supervised learning, neural networks, computer vision, and practical model deployment pipelines.',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'Computer Vision']
  },
  {
    id: 'google-cloud-computing-foundations',
    title: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud Skills Boost',
    issueDate: '2024',
    description: 'Foundational certification covering cloud architecture, infrastructure deployment, containerization, and networking on Google Cloud Platform.',
    skills: ['Google Cloud', 'DevOps', 'Docker', 'Cloud Infrastructure']
  }
];

export function getCertificateById(id: string): Certificate | undefined {
  return certificates.find((cert) => cert.id === id);
}
