import projectFallback from '$lib/assets/images/404.png';

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
  role?: string;
  ownership?: string;
  team?: string;
  responsibilities?: string[];
  features?: string[];
  impacts?: string[];
};

const projectContent: ProjectContent[] = [
  {
    id: 'project-mlops-thesis',
    title: 'MLOps for Federated Learning',
    description: 'Undergraduate final project: heart disease classification with Flower and MLflow. Implemented experiment tracking, best-model registration, and centralized container logs with Docker, Grafana Loki, and Alloy.',
    technologies: ['MLflow', 'Flower', 'Docker', 'Grafana Loki', 'Python', 'Scikit-learn'],
    githubUrl: 'https://github.com/attmhd/tugas-akhir',
    category: 'MLOps',
    role: 'ML Engineer',
    responsibilities: [
      'Built the federated learning training workflow.',
      'Configured experiment tracking and model registration with MLflow.',
      'Containerized services and centralized logs for local observability.'
    ],
    features: ['Federated heart disease classification', 'Experiment tracking', 'Best-model registration', 'Centralized container logs'],
    impacts: ['Made model experiments reproducible.', 'Created a practical MLOps workflow for federated learning.']
  },
  {
    id: 'project-karsakito-ai-backend',
    title: 'Karsakito AI Backend Engine',
    description: 'Built FastAPI services for Minangkabau translation, writing, and language etiquette. Integrated LLM providers through LiteLLM, Redis caching, input guardrails, and Langfuse tracing for latency and model usage.',
    technologies: ['FastAPI', 'LiteLLM', 'Redis', 'Langfuse', 'Guardrails AI', 'Podman', 'GitHub Actions'],
    githubUrl: 'https://github.com/attmhd/karsakito-ai-be',
    demoUrl: 'https://karsakito.web.id/',
    category: 'Backend',
    role: 'AI Backend Engineer',
    responsibilities: [
      'Designed backend services for Minangkabau language features.',
      'Integrated LLM providers, retrieval, caching, and observability.',
      'Added input guardrails for safer model interactions.'
    ],
    features: ['Minangkabau translation', 'Writing assistance', 'Language etiquette checking', 'Redis caching', 'LLM usage tracing'],
    impacts: ['Supports digital preservation of Minangkabau language and cultural context.']
  },
  {
    id: 'project-klop-ai-backend',
    title: 'Klop! AI Assessment Backend',
    description: 'Hackathon project: developed APIs for generating technical assessments and scoring answers with Qwen and Kolosal AI. Deployed the backend to a DigitalOcean Droplet with Cloudflare routing and Caddy HTTPS.',
    technologies: ['FastAPI', 'Docker', 'Qwen', 'Caddy', 'DigitalOcean', 'Kolosal AI'],
    githubUrl: 'https://github.com/attmhd/klop-ai-be',
    demoUrl: 'https://klop-ai.vercel.app/',
    category: 'Backend',
    role: 'Backend Developer',
    responsibilities: [
      'Developed APIs for technical assessment generation and answer scoring.',
      'Integrated Qwen and Kolosal AI model services.',
      'Deployed the backend with HTTPS and Cloudflare routing.'
    ],
    features: ['Assessment generation', 'Automated answer scoring', 'Cloud deployment', 'HTTPS routing'],
    impacts: ['Turned an assessment concept into a deployable hackathon backend.']
  },
  {
    id: 'project-order-processing-microservices',
    title: 'Order Processing Microservices',
    description: 'Learning project connecting order, payment, and inventory services through Go, gRPC, and RabbitMQ. Explored event-driven workflows, message retries, dead-letter queues, and separate PostgreSQL databases with Docker Compose.',
    technologies: ['Go', 'RabbitMQ', 'PostgreSQL', 'gRPC', 'Redis', 'Docker Compose'],
    githubUrl: 'https://github.com/attmhd/order-processing-microservices',
    category: 'Backend',
    role: 'Backend Developer',
    responsibilities: ['Designed the service boundaries for order, payment, and inventory workflows.', 'Implemented gRPC communication and RabbitMQ event flows.', 'Configured PostgreSQL persistence and Docker Compose development environments.'],
    features: ['Order processing', 'Payment and inventory services', 'Event-driven messaging', 'Message retries', 'Dead-letter queues'],
    impacts: ['Strengthened understanding of resilient microservice communication and asynchronous processing.']
  },
  {
    id: 'project-ml-training-serving-monitoring',
    title: 'ML Training, Serving & Monitoring',
    description: 'Course project exploring the ML lifecycle through model experiments, a CI workflow, API serving, and monitoring. Combined FastAPI and Docker with Prometheus and Grafana to practice operating an ML service.',
    technologies: ['Docker', 'FastAPI', 'Prometheus', 'Grafana', 'DagsHub', 'GitHub Actions'],
    githubUrl: 'https://github.com/attmhd/proyek-akhir-msml',
    category: 'MLOps',
    role: 'MLOps Engineer',
    responsibilities: ['Prepared the model training workflow and CI automation.', 'Exposed the trained model through a FastAPI service.', 'Added Prometheus metrics and Grafana dashboards for service monitoring.'],
    features: ['Model training pipeline', 'FastAPI model serving', 'CI workflow', 'Metrics collection', 'Monitoring dashboard'],
    impacts: ['Connected model development with deployment and operational monitoring practices.']
  },
  {
    id: 'project-simobi-review-sentiment',
    title: 'Simobi+ Review Sentiment Analysis',
    description: 'Processed app reviews and compared SVM, Bi-LSTM, and IndoBERT for sentiment classification. Used manual annotation and pseudo-labeling to explore learning from limited labeled data, with separate preprocessing and evaluation notebooks.',
    technologies: ['Python', 'IndoBERT', 'Bi-LSTM', 'Label Studio', 'Pseudo-labeling'],
    githubUrl: 'https://github.com/attmhd/sentiment-analysis-simobiplus',
    category: 'AI/ML',
    role: 'Machine Learning Engineer',
    responsibilities: ['Prepared and cleaned mobile-app review data.', 'Compared classical, recurrent, and transformer-based classifiers.', 'Evaluated the effect of manual annotation and pseudo-labeling.'],
    features: ['Review preprocessing', 'Manual annotation workflow', 'SVM baseline', 'Bi-LSTM classifier', 'IndoBERT comparison'],
    impacts: ['Provided a comparative view of sentiment modeling approaches for Indonesian app reviews.']
  },
  {
    id: 'project-go-pos-backend',
    title: 'Go POS Backend',
    description: 'Final project for a Go training program: a simple point-of-sale backend using Gin and PostgreSQL. Practiced API development and database integration for a small business workflow.',
    technologies: ['Go', 'Gin Gonic', 'PostgreSQL', 'Supabase'],
    githubUrl: 'https://github.com/attmhd/jago-golang-p1',
    category: 'Backend',
    role: 'Backend Developer',
    responsibilities: ['Implemented REST endpoints with Gin.', 'Designed PostgreSQL-backed data access for POS operations.', 'Connected the application to Supabase for hosted persistence.'],
    features: ['POS backend API', 'Product and transaction data', 'PostgreSQL persistence', 'Supabase integration'],
    impacts: ['Built a practical foundation for small-business transaction management.']
  },
  {
    id: 'project-family-gps-tracker',
    title: 'Family GPS Tracker',
    description: 'Backend learning project using a family location-tracking scenario to explore Apache Kafka. Used Go and Redis alongside event messaging to practice handling location updates.',
    technologies: ['Go', 'Apache Kafka', 'Redis'],
    githubUrl: 'https://github.com/attmhd/fam-gps',
    category: 'Backend',
    role: 'Backend Developer',
    responsibilities: ['Modeled location updates as streaming events.', 'Used Kafka for event delivery and Redis for fast state access.', 'Implemented the project as a Go backend learning exercise.'],
    features: ['Location event streaming', 'Kafka messaging', 'Redis state storage', 'Family tracking scenario'],
    impacts: ['Built hands-on experience with event streaming and real-time data patterns.']
  },
  {
    id: 'project-modern-ml-template',
    title: 'Modern ML Project Template',
    description: 'A reusable starting point for ML experiments, using Cookiecutter for project scaffolding and uv for Python dependencies. Built to practice keeping experiment code and project setup organized.',
    technologies: ['Python', 'uv', 'Cookiecutter'],
    githubUrl: 'https://github.com/attmhd/ml-projects-template',
    category: 'MLOps',
    role: 'ML Engineer',
    responsibilities: ['Created a repeatable project structure with Cookiecutter.', 'Managed Python dependencies with uv.', 'Separated experiment code from reusable project configuration.'],
    features: ['Project scaffolding', 'Dependency management', 'Experiment-ready structure', 'Reusable templates'],
    impacts: ['Reduces setup friction and keeps future machine-learning projects consistent.']
  },
  {
    id: 'project-indonesian-legal-llm',
    title: 'Indonesian Legal LLM Lab',
    description: 'An experimental project exploring Qwen 2.5 1.5B fine-tuning for Indonesian legal text. Used Unsloth and QLoRA alongside retrieval experiments to study adapting a small language model to a specific domain.',
    technologies: ['Unsloth', 'QLoRA', 'Qwen', 'RAG', 'Hugging Face'],
    githubUrl: 'https://github.com/attmhd/indonesian-legal-llm-lab',
    category: 'AI/ML',
    role: 'AI/ML Engineer',
    responsibilities: ['Prepared Indonesian legal text for model adaptation experiments.', 'Explored QLoRA fine-tuning with Unsloth and Qwen.', 'Compared fine-tuning with retrieval-based approaches.'],
    features: ['Legal-domain dataset exploration', 'QLoRA fine-tuning', 'Small language model adaptation', 'RAG experiments'],
    impacts: ['Established a practical lab for evaluating domain-specific Indonesian language models.']
  },
  {
    id: 'project-garbage-classification',
    title: 'Garbage Image Classification',
    description: 'An image classification experiment using EfficientNetV2S and transfer learning. Practiced adapting a pretrained vision model to garbage classification.',
    technologies: ['EfficientNetV2S', 'Transfer Learning', 'CNN'],
    githubUrl: 'https://github.com/attmhd/garbage-classification',
    category: 'AI/ML',
    role: 'Machine Learning Engineer',
    responsibilities: ['Prepared image data for garbage categories.', 'Applied transfer learning with EfficientNetV2S.', 'Evaluated a convolutional image-classification workflow.'],
    features: ['Image preprocessing', 'Transfer learning', 'Garbage category prediction', 'EfficientNetV2S model'],
    impacts: ['Demonstrates practical application of pretrained vision models to an environmental use case.']
  },
  {
    id: 'project-diffusion-playground',
    title: 'Diffusion Model Playground',
    description: 'Course project exploring text-to-image and image-to-image generation with Stable Diffusion. Used Streamlit to build an interface for experimenting with model inputs and outputs.',
    technologies: ['Stable Diffusion', 'Streamlit', 'Python'],
    githubUrl: 'https://github.com/attmhd/proyek-akhir-bfgai',
    category: 'AI/ML',
    role: 'Generative AI Developer',
    responsibilities: ['Integrated Stable Diffusion inference into a Python application.', 'Built controls for text-to-image and image-to-image generation.', 'Created a Streamlit interface for interactive experiments.'],
    features: ['Text-to-image generation', 'Image-to-image generation', 'Interactive Streamlit UI', 'Prompt-based experimentation'],
    impacts: ['Made generative-image experimentation accessible through a simple browser interface.']
  },
  {
    id: 'project-ai-web-application',
    title: 'AI in a Web Application',
    description: 'Course project integrating a machine learning model into a web application with TensorFlow.js. Explored browser-side inference and progressive web app fundamentals.',
    technologies: ['TensorFlow.js', 'PWA'],
    githubUrl: 'https://github.com/attmhd/penerapan-ai-di-aplikasi-web',
    category: 'AI/ML',
    role: 'Frontend AI Developer',
    responsibilities: ['Integrated a machine-learning model into a web interface.', 'Implemented browser-side inference with TensorFlow.js.', 'Applied progressive web application fundamentals.'],
    features: ['In-browser inference', 'TensorFlow.js integration', 'Web application interface', 'PWA fundamentals'],
    impacts: ['Shows how AI features can run directly in a user-facing web application.']
  },
  {
    id: 'project-padiah-language',
    title: 'Padiah Language',
    description: 'A Python programming language experiment. Built as a personal project to explore language implementation concepts.',
    technologies: ['Python'],
    githubUrl: 'https://github.com/attmhd/padiah-language',
    category: 'Language Tools Developer',
    role: 'Language Tools Developer',
    responsibilities: ['Explored the structure of a small programming language.', 'Implemented the project as a Python language experiment.', 'Practiced translating language concepts into executable code.'],
    features: ['Custom language experiment', 'Python implementation', 'Language design exploration'],
    impacts: ['Built foundational understanding of interpreters and programming-language concepts.']
  },
  {
    id: 'project-simple-laundry',
    title: 'Simple Laundry Application',
    description: 'Final project for an introductory programming course. Used C++ to model a simple laundry workflow and practice foundational programming concepts.',
    technologies: ['C++'],
    githubUrl: 'https://github.com/attmhd/tugas_akhir_c-',
    category: 'Software Developer',
    role: 'Software Developer',
    responsibilities: ['Modeled a laundry service workflow in C++.', 'Implemented core data input and transaction logic.', 'Applied foundational procedural programming concepts.'],
    features: ['Laundry service workflow', 'Transaction handling', 'C++ console application'],
    impacts: ['Strengthened fundamentals in program structure, logic, and data handling.']
  },
  {
    id: 'project-minang-language-dictionary',
    title: 'Minang Language Dictionary',
    description: 'Team project for Firetech Hackathon 2025, recognized for Most Creative Idea. Led the concept and contributed to a collaborative dictionary for regional language preservation, with vocabulary contributions and a leaderboard.',
    technologies: ['TypeScript', 'Vite', 'Supabase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/attmhd/hackathon-project-firetech',
    demoUrl: 'https://ml.natta.biz.id/',
    category: 'Web Application',
    role: 'Project Lead & Full-stack Developer',
    team: 'Firetech Hackathon Team',
    responsibilities: ['Led the product concept for a collaborative Minang dictionary.', 'Contributed vocabulary and leaderboard functionality.', 'Helped shape the web interface and project presentation.'],
    features: ['Regional vocabulary dictionary', 'Community contributions', 'Contributor leaderboard', 'Supabase-backed data'],
    impacts: ['Won the Most Creative Idea recognition and promotes Minangkabau language preservation.']
  },
  {
    id: 'project-lecturer-portfolio',
    title: 'Lecturer Portfolio & Teaching Materials',
    description: "Web programming course project adapted into a lecturer's portfolio and teaching-materials website. Practiced implementing a complete Laravel application for an academic use case.",
    technologies: ['Laravel', 'Vite', 'Tailwind CSS'],
    demoUrl: 'https://materiajar.nisapage.my.id/',
    category: 'Web Application',
    role: 'Full-stack Developer',
    responsibilities: ['Implemented the Laravel application structure.', 'Built pages for lecturer information and teaching materials.', 'Styled the interface with Tailwind CSS and Vite.'],
    features: ['Lecturer profile', 'Teaching-material pages', 'Laravel application structure', 'Responsive web interface'],
    impacts: ['Converted a course assignment into a usable academic portfolio website.']
  },
  {
    id: 'project-youtube-downloader',
    title: 'YouTube Downloader',
    description: 'A Python utility built around yt-dlp for downloading videos. A small project in integrating an existing tool into an application workflow.',
    technologies: ['Python', 'yt-dlp'],
    githubUrl: 'https://github.com/attmhd/yt-downloader',
    category: 'Utility',
    role: 'Python Developer',
    responsibilities: ['Wrapped yt-dlp in a focused Python utility.', 'Handled the download workflow through an application interface.', 'Practiced integrating a mature command-line tool.'],
    features: ['Video download workflow', 'yt-dlp integration', 'Python utility interface'],
    impacts: ['Demonstrates practical integration of an existing media-processing tool.']
  },
];

export const projects: Project[] = projectContent.map((project, index) => ({
  id: project.id,
  number: String(index + 1).padStart(2, '0'),
  title: project.title,
  description: project.description,
  role: project.role ?? `${project.category} Developer`,
  year: '',
  type: project.category,
  technologies: project.technologies,
  href: project.demoUrl ?? project.githubUrl ?? '#',
  image: projectFallback,
  details: project.description,
  category: project.category,
  gallery: [projectFallback],
  ownership: project.ownership ?? 'Personal Project',
  team: project.team ?? 'Independent Project',
  demoUrl: project.demoUrl ?? null,
  repositoryUrl: project.githubUrl ?? null,
  responsibilities: project.responsibilities ?? [
    `Designed and developed the ${project.title} project.`,
    `Applied ${project.technologies.slice(0, 3).join(', ')} in the implementation.`
  ],
  features: project.features ?? [
    project.description,
    `Built with ${project.technologies.join(', ')}.`
  ],
  impacts: project.impacts ?? [
    `Demonstrates practical experience in ${project.category.toLowerCase()}.`
  ]
}));
