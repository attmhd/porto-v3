export type Achievement = {
  id: string;
  title: string;
  event: string;
  year: string;
};

export const achievements: Achievement[] = [
  {
    id: 'pidi-semifinalist',
    title: 'Semifinalist',
    event: 'PIDI Hackathon (Professional Track)',
    year: '2026'
  },
  {
    id: 'firetech-most-creative-idea',
    title: 'Most Creative Idea',
    event: 'Firetech Hackathon',
    year: '2025'
  },
];
