export type PortfolioTechStackItem = {
  name: string;
  iconName: string;
  category: 'Language' | 'Framework' | 'Tool' | 'Cloud';
};

export const STACK_CONTENT: PortfolioTechStackItem[] = [
  { name: 'Python', iconName: 'python', category: 'Language' },
  { name: 'Go', iconName: 'go', category: 'Language' },
  { name: 'TypeScript', iconName: 'typescript', category: 'Language' },
  { name: 'FastAPI', iconName: 'fastapi', category: 'Framework' },
  { name: 'Laravel', iconName: 'laravel', category: 'Framework' },
  { name: 'Kotlin', iconName: 'kotlin', category: 'Language' },
  { name: 'Gin Gonic', iconName: 'gin', category: 'Framework' },
  { name: 'PostgreSQL', iconName: 'postgresql', category: 'Tool' },
  { name: 'Redis', iconName: 'redis', category: 'Tool' },
  { name: 'RabbitMQ', iconName: 'rabbitmq', category: 'Tool' },
  { name: 'Git', iconName: 'git', category: 'Tool' },
  { name: 'Docker', iconName: 'docker', category: 'Tool' },
  { name: 'Github Actions', iconName: 'githubactions', category: 'Tool' },
  { name: 'MLflow', iconName: 'mlflow', category: 'Tool' },
  { name: 'Prometheus', iconName: 'prometheus', category: 'Tool' },
  { name: 'Grafana', iconName: 'grafana', category: 'Tool' },
  { name: 'Scikit-learn', iconName: 'scikitlearn', category: 'Framework' },
  { name: 'TensorFlow', iconName: 'tensorflow', category: 'Framework' },
  { name: 'Langchain', iconName: 'langchain', category: 'Framework' },
  { name: 'Qdrant', iconName: 'qdrant', category: 'Tool' },
  { name: 'Pandas', iconName: 'pandas', category: 'Tool' },
  { name: 'DigitalOcean', iconName: 'digitalocean', category: 'Cloud' },
  { name: 'AWS', iconName: 'amazonwebservices', category: 'Cloud' },
  { name: 'Linux', iconName: 'linux', category: 'Cloud' },
];
