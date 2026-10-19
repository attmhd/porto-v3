import logoItp from '$lib/assets/images/logo-itp.png';

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  logo: string;
};

export const education: EducationItem[] = [
  {
    institution: 'Institut Teknologi Padang',
    degree: 'Bachelor of Informatics Engineering',
    period: 'Sep 2022 - Sep 2026',
    gpa: 'GPA 3.73 / 4.00',
    logo: logoItp,
  },
];
