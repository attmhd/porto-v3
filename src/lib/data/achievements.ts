export type Achievement = {
  id: string;
  title: string;
  event: string;
  year: string;
  url?: string;
  liveUrl?: string;
  projectId: string;
  projectName: string;
  summary: string;
  problem: string;
  solution: string;
  vision: string;
  role: string;
  teamName: string;
  teamSummary: string;
  // Add teammates here once their names and roles are confirmed.
  teamMembers: { name: string; role: string; url?: string; avatar?: string }[];
  contributions: string[];
  // Set src to an imported team photo or public image URL; null shows the 404 placeholder.
  gallery: { src: string | null; alt: string }[];
};

export const achievements: Achievement[] = [
  {
    id: 'pidi-semifinalist',
    title: 'Semifinalist',
    event: 'PIDI Hackathon (Professional Track)',
    url: 'https://innovation.pidi.id/inovasi/karsakito-ekosistem-produktivitas-ai-bahasa-nusantara',
    liveUrl: 'https://karsakito.web.id/',
    year: '2026',
    projectId: 'project-karsakito-ai-backend',
    projectName: 'KarsaKito',
    gallery: [
      { src: null, alt: 'KarsaKito team gallery placeholder 1' },
      { src: null, alt: 'KarsaKito team gallery placeholder 2' },
      { src: null, alt: 'KarsaKito team gallery placeholder 3' },
    ],
    summary:
      'A language-focused AI productivity platform, with backend services for Minangkabau translation, writing, and language etiquette.',
    problem:
      'Writing and translating regional-language content requires attention to dialect, cultural context, and politeness. KarsaKito addresses this need through tools designed for Indonesian and Nusantara languages.',
    solution:
      'The platform brings writing, text analysis, text transformation, and translation into one experience. My backend work supported Minangkabau language features through FastAPI services and integrated LLM providers.',
    vision:
      'Build AI language models and infrastructure for Nusantara languages that communities, institutions, developers, and businesses can use through products, APIs, and SDKs.',
    role: 'AI Backend Engineer',
    teamName: 'Tim Kito',
    teamSummary:
      'KarsaKito is a team project. The platform represents our shared work; the contributions below describe my focus on the AI backend.',
    teamMembers: [
      {
        name: 'Grafis Nuresa',
        avatar: '/team/grafis-nuresa.jpg',
        role: 'Project Lead, Business Analyst, dan UI/UX Strategist',
        url: 'https://id.linkedin.com/in/grafis-nuresa',
      },
      {
        name: 'Muhammad Attan',
        avatar: '/team/muhammad-attan.webp',
        role: 'AI/Backend Developer',
        url: 'https://id.linkedin.com/in/attmhd',
      },
      {
        name: 'Okyra Asyrafi Guchan',
        role: 'Fullstack Developer',
        url: 'https://id.linkedin.com/in/okyra-asyrafi-guchan',
      },
      {
        name: 'Pandu Pratama Handika',
        avatar: '/team/pandu-pratama-handika.jpg',
        role: 'Frontend Developer',
        url: 'https://id.linkedin.com/in/pandu-pratama-handika-8568131b2',
      },
    ],
    contributions: [
      'Designed backend services for Minangkabau translation, writing assistance, and language etiquette.',
      'Integrated LLM providers through LiteLLM, with retrieval and Redis caching.',
      'Added input guardrails and Langfuse tracing for latency and model usage.',
    ],
  },

  {
    id: 'firetech-most-creative-idea',
    title: 'Most Creative Idea',
    event: 'Firetech Hackathon',
    year: '2025',
    url: 'https://www.instagram.com/p/DQojG4jEgn1/',
    liveUrl: 'https://ml.natta.biz.id/',
    projectId: 'project-minang-language-dictionary',
    projectName: 'Minang Language Dictionary',

    gallery: [
      { src: '/gallery/firetech-hackathon.jpg', alt: 'Firetech Hackathon team photo' },
      { src: '/gallery/firetech-hackathon-2.jpeg', alt: 'Firetech Hackathon team photo' },
      // { src: null, alt: 'Minang Language Dictionary application preview' },
      // { src: null, alt: 'Firetech Hackathon project presentation' },
    ],

    summary:
      'An open-source digital dictionary concept for documenting and preserving Minangkabau vocabulary and regional dialects through community participation. Initiated and developed during Firetech Hackathon 2025, where the team received the Most Creative Idea award.',

    problem:
      'Minangkabau vocabulary and regional dialects represent valuable cultural knowledge that needs accessible ways to be documented and shared. A community-driven digital platform can help collect local vocabulary, make it easier to discover, and support long-term language preservation.',

    solution:
      'Initiated the product concept and built a web application for discovering and contributing Minangkabau vocabulary. The platform incorporates a contributor leaderboard to encourage community participation, with Supabase supporting the application data. The project explores how a collaborative dictionary could grow into a digital resource for cultural preservation.',

    vision:
      'Build a community-driven digital resource for documenting Minangkabau vocabulary and regional dialects, preserving local cultural knowledge, and creating a foundation for future language technology and AI applications.',

    role: 'Initiator & Full-stack Developer',

    teamName: 'Natta STD',

    teamSummary:
      'A collaborative project developed for Firetech Hackathon 2025, where the team received the Most Creative Idea award. I initiated the idea, shaped the product concept, and built the application. Pandu contributed UI/UX design, Abdul Hadi presented the project, and Kausar and Zola provided supporting contributions during development. The project emphasized the originality and cultural relevance of the idea rather than technical complexity.',

    teamMembers: [
      {
        name: 'Muhammad Attan',
        avatar: '/team/muhammad-attan.webp',
        role: 'Initiator & Full-stack Developer',
        url: 'https://github.com/attmhd',
      },
      {
        name: 'Pandu Pratama Handika',
        role: 'UI/UX Designer',
        avatar: '/team/pandu-pratama-handika.jpg',
        url: 'https://id.linkedin.com/in/pandu-pratama-handika-8568131b2',
      },
      {
        name: 'Abdul Hadi',
        role: 'Project Presenter',
        url: 'https://www.linkedin.com/in/abdul-hadi-a26b16309/',
      },
      {
        name: 'Kausar',
        role: 'Frontend Development Contributor',
        url: '#',
      },
      {
        name: 'Zola',
        role: 'Design Contributor',
        url: '#',
      },
    ],

    contributions: [
      'Initiated the project idea and defined the product concept for a community-driven Minangkabau language dictionary.',
      'Designed and built the application, implementing vocabulary discovery and community contribution functionality.',
      'Developed the contributor leaderboard to encourage participation in documenting regional vocabulary.',
      'Integrated Supabase to support the application data and collaborative experience.',
      'Shaped the project narrative around cultural preservation, community participation, and the potential for future language technology.',
    ],
  },
];
