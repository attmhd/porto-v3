export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  role: string;
  year: string;
  type: string;
  technologies: string[];
  href: string;
  image: string;
  details: string;
  category: string;
  gallery: string[];
  ownership: string;
  team: string;
  demoUrl: string | null;
  repositoryUrl: string | null;
  responsibilities: string[];
  features: string[];
  impacts: string[];
};

type ProjectContent = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: string;
};

const projectContent: ProjectContent[] = [
  {
    id: 'project-mlops-thesis',
    title: 'MLOps for Federated Learning',
    description: 'Undergraduate final project: heart disease classification with Flower and MLflow. Implemented experiment tracking, best-model registration, and centralized container logs with Docker, Grafana Loki, and Alloy.',
    technologies: ['MLflow', 'Flower', 'Docker', 'Grafana Loki', 'Python', 'Scikit-learn'],
    githubUrl: 'https://github.com/attmhd/tugas-akhir',
    category: 'MLOps'
  },
  {
    id: 'project-karsakito-ai-backend',
    title: 'Karsakito AI Backend Engine',
    description: 'Built FastAPI services for Minangkabau translation, writing, and language etiquette. Integrated LLM providers through LiteLLM, Redis caching, input guardrails, and Langfuse tracing for latency and model usage.',
    technologies: ['FastAPI', 'LiteLLM', 'Redis', 'Langfuse', 'Guardrails AI', 'Podman', 'GitHub Actions'],
    githubUrl: 'https://github.com/attmhd/karsakito-ai-be',
    demoUrl: 'https://innovation.pidi.id/inovasi/karsakito-ekosistem-produktivitas-ai-bahasa-nusantara',
    category: 'Backend'
  },
  {
    id: 'project-klop-ai-backend',
    title: 'Klop! AI Assessment Backend',
    description: 'Hackathon project: developed APIs for generating technical assessments and scoring answers with Qwen and Kolosal AI. Deployed the backend to a DigitalOcean Droplet with Cloudflare routing and Caddy HTTPS.',
    technologies: ['FastAPI', 'Docker', 'Qwen', 'Caddy', 'DigitalOcean', 'Kolosal AI'],
    githubUrl: 'https://github.com/attmhd/klop-ai-be',
    demoUrl: 'https://klop-ai.vercel.app/',
    category: 'Backend'
  },
  {
    id: 'project-order-processing-microservices',
    title: 'Order Processing Microservices',
    description: 'Learning project connecting order, payment, and inventory services through Go, gRPC, and RabbitMQ. Explored event-driven workflows, message retries, dead-letter queues, and separate PostgreSQL databases with Docker Compose.',
    technologies: ['Go', 'RabbitMQ', 'PostgreSQL', 'gRPC', 'Redis', 'Docker Compose'],
    githubUrl: 'https://github.com/attmhd/order-processing-microservices',
    category: 'Backend'
  },
  {
    id: 'project-ml-training-serving-monitoring',
    title: 'ML Training, Serving & Monitoring',
    description: 'Course project exploring the ML lifecycle through model experiments, a CI workflow, API serving, and monitoring. Combined FastAPI and Docker with Prometheus and Grafana to practice operating an ML service.',
    technologies: ['Docker', 'FastAPI', 'Prometheus', 'Grafana', 'DagsHub', 'GitHub Actions'],
    githubUrl: 'https://github.com/attmhd/proyek-akhir-msml',
    category: 'MLOps'
  },
  {
    id: 'project-simobi-review-sentiment',
    title: 'Simobi+ Review Sentiment Analysis',
    description: 'Processed app reviews and compared SVM, Bi-LSTM, and IndoBERT for sentiment classification. Used manual annotation and pseudo-labeling to explore learning from limited labeled data, with separate preprocessing and evaluation notebooks.',
    technologies: ['Python', 'IndoBERT', 'Bi-LSTM', 'Label Studio', 'Pseudo-labeling'],
    githubUrl: 'https://github.com/attmhd/sentiment-analysis-simobiplus',
    category: 'AI/ML'
  },
  {
    id: 'project-go-pos-backend',
    title: 'Go POS Backend',
    description: 'Final project for a Go training program: a simple point-of-sale backend using Gin and PostgreSQL. Practiced API development and database integration for a small business workflow.',
    technologies: ['Go', 'Gin Gonic', 'PostgreSQL', 'Supabase'],
    githubUrl: 'https://github.com/attmhd/jago-golang-p1',
    category: 'Backend'
  },
  {
    id: 'project-family-gps-tracker',
    title: 'Family GPS Tracker',
    description: 'Backend learning project using a family location-tracking scenario to explore Apache Kafka. Used Go and Redis alongside event messaging to practice handling location updates.',
    technologies: ['Go', 'Apache Kafka', 'Redis'],
    githubUrl: 'https://github.com/attmhd/fam-gps',
    category: 'Backend'
  },
  {
    id: 'project-modern-ml-template',
    title: 'Modern ML Project Template',
    description: 'A reusable starting point for ML experiments, using Cookiecutter for project scaffolding and uv for Python dependencies. Built to practice keeping experiment code and project setup organized.',
    technologies: ['Python', 'uv', 'Cookiecutter'],
    githubUrl: 'https://github.com/attmhd/ml-projects-template',
    category: 'MLOps'
  },
  {
    id: 'project-indonesian-legal-llm',
    title: 'Indonesian Legal LLM Lab',
    description: 'An experimental project exploring Qwen 2.5 1.5B fine-tuning for Indonesian legal text. Used Unsloth and QLoRA alongside retrieval experiments to study adapting a small language model to a specific domain.',
    technologies: ['Unsloth', 'QLoRA', 'Qwen', 'RAG', 'Hugging Face'],
    githubUrl: 'https://github.com/attmhd/indonesian-legal-llm-lab',
    category: 'AI/ML'
  },
  {
    id: 'project-garbage-classification',
    title: 'Garbage Image Classification',
    description: 'An image classification experiment using EfficientNetV2S and transfer learning. Practiced adapting a pretrained vision model to garbage classification.',
    technologies: ['EfficientNetV2S', 'Transfer Learning', 'CNN'],
    githubUrl: 'https://github.com/attmhd/garbage-classification',
    category: 'AI/ML'
  },
  {
    id: 'project-diffusion-playground',
    title: 'Diffusion Model Playground',
    description: 'Course project exploring text-to-image and image-to-image generation with Stable Diffusion. Used Streamlit to build an interface for experimenting with model inputs and outputs.',
    technologies: ['Stable Diffusion', 'Streamlit', 'Python'],
    githubUrl: 'https://github.com/attmhd/proyek-akhir-bfgai',
    category: 'AI/ML'
  },
  {
    id: 'project-ai-web-application',
    title: 'AI in a Web Application',
    description: 'Course project integrating a machine learning model into a web application with TensorFlow.js. Explored browser-side inference and progressive web app fundamentals.',
    technologies: ['TensorFlow.js', 'PWA'],
    githubUrl: 'https://github.com/attmhd/penerapan-ai-di-aplikasi-web',
    category: 'AI/ML'
  },
  {
    id: 'project-padiah-language',
    title: 'Padiah Language',
    description: 'A Python programming language experiment. Built as a personal project to explore language implementation concepts.',
    technologies: ['Python'],
    githubUrl: 'https://github.com/attmhd/padiah-language',
    category: 'Backend'
  },
  {
    id: 'project-simple-laundry',
    title: 'Simple Laundry Application',
    description: 'Final project for an introductory programming course. Used C++ to model a simple laundry workflow and practice foundational programming concepts.',
    technologies: ['C++'],
    githubUrl: 'https://github.com/attmhd/tugas_akhir_c-',
    category: 'Backend'
  },
  {
    id: 'project-minang-language-dictionary',
    title: 'Minang Language Dictionary',
    description: 'Team project for Firetech Hackathon 2025, recognized for Most Creative Idea. Led the concept and contributed to a collaborative dictionary for regional language preservation, with vocabulary contributions and a leaderboard.',
    technologies: ['TypeScript', 'Vite', 'Supabase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/attmhd/hackathon-project-firetech',
    demoUrl: 'https://ml.natta.biz.id/',
    category: 'Web Application'
  },
  {
    id: 'project-lecturer-portfolio',
    title: 'Lecturer Portfolio & Teaching Materials',
    description: "Web programming course project adapted into a lecturer's portfolio and teaching-materials website. Practiced implementing a complete Laravel application for an academic use case.",
    technologies: ['Laravel', 'Vite', 'Tailwind CSS'],
    demoUrl: 'https://materiajar.nisapage.my.id/',
    category: 'Web Application'
  },
  {
    id: 'project-youtube-downloader',
    title: 'YouTube Downloader',
    description: 'A Python utility built around yt-dlp for downloading videos. A small project in integrating an existing tool into an application workflow.',
    technologies: ['Python', 'yt-dlp'],
    githubUrl: 'https://github.com/attmhd/yt-downloader',
    category: 'Utility'
  },
];

export const projects: Project[] = projectContent.map((project, index) => ({
  id: project.id,
  number: String(index + 1).padStart(2, '0'),
  title: project.title,
  description: project.description,
  role: project.category,
  year: '',
  type: project.category,
  technologies: project.technologies,
  href: project.demoUrl ?? project.githubUrl ?? '#',
  image: projectFallback,
  details: project.description,
  category: project.category,
  gallery: [projectFallback],
  ownership: 'Personal Project',
  team: 'Independent Project',
  demoUrl: project.demoUrl ?? null,
  repositoryUrl: project.githubUrl ?? null,
  responsibilities: [],
  features: [],
  impacts: []
}));
import projectFallback from '$lib/assets/images/404.png';
