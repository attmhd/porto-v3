export type Achievement = {
  id: string;
  title: string;
  event: string;
  year: string;
  url?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'pidi-semifinalist',
    title: 'Semifinalist',
    event: 'PIDI Hackathon (Professional Track)',
    url: 'https://innovation.pidi.id/inovasi/karsakito-ekosistem-produktivitas-ai-bahasa-nusantara',
    year: '2026'
  },
  {
    id: 'firetech-most-creative-idea',
    title: 'Most Creative Idea',
    event: 'Firetech Hackathon',
    year: '2025',
    url: 'https://www.instagram.com/p/DQojG4jEgn1/'
  },
];
