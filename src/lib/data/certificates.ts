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
    id: 'its-python',
    title: 'ITS Python',
    issuer: 'Institut Teknologi Sepuluh Nopember',
    issueDate: '',
    description: 'Python programming certification listed in Muhammad Attan’s CV.',
    skills: ['Python', 'Programming']
  },
  {
    id: 'dev-certified-machine-learning-tensorflow',
    title: 'Dev Certified for Machine Learning with TensorFlow',
    issuer: 'Dev Certified',
    issueDate: '',
    description: 'Machine learning certification focused on developing models with TensorFlow.',
    skills: ['Machine Learning', 'TensorFlow', 'Python']
  },
  {
    id: 'agile-scrum-fundamentals',
    title: 'Agile Scrum Fundamentals',
    issuer: 'Agile Scrum',
    issueDate: '',
    description: 'Certification covering the fundamentals of Agile and Scrum ways of working.',
    skills: ['Agile', 'Scrum', 'Team Collaboration']
  },
  {
    id: 'us-asean-stic',
    title: 'US-ASEAN STIC',
    issuer: 'US-ASEAN STIC',
    issueDate: '',
    description: 'Professional certification listed in Muhammad Attan’s CV.',
    skills: ['Technology', 'Professional Development']
  }
];

export function getCertificateById(id: string): Certificate | undefined {
  return certificates.find((cert) => cert.id === id);
}
