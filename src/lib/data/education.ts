import logoItp from '$lib/assets/images/logo-itp.png';
import logoTelkom from '$lib/assets/images/logo-telkom-university.webp';
import logoSmti from '$lib/assets/images/logo-smk-smti-padang.webp';
import logoSmpn1 from '$lib/assets/images/logo-smpn-1-lengayang.webp';
import logoSd from '$lib/assets/images/logo-sd.webp';
import logoTk from '$lib/assets/images/logo-tk.webp';

export type EducationItem = {
  institution: string;
  degree: string;
  period?: string;
  gpa?: string;
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
  // {
  //   institution: 'Telkom University',
  //   degree: 'PJJ Informatics',
  //   period: '2020 - 2021',
  //   logo: logoTelkom,
  // },
  // {
  //   institution: 'SMK SMTI Padang',
  //   degree: 'Chemical Engineering',
  //   period: '2015 - 2018',
  //   logo: logoSmti,
  // },
  // {
  //   institution: 'SMPN 1 Lengayang',
  //   degree: 'Junior High School',
  //   period: '2012 - 2015',
  //   logo: logoSmpn1,
  // },
  // {
  //   institution: 'SDN 36 Rangeh',
  //   degree: 'Elementary School',
  //   period: '2007 - 2012',
  //   logo: logoSd,
  // },
  // {
  //   institution: 'SDN 17 Pasar Surantih',
  //   degree: 'Elementary School',
  //   period: '2006 - 2007',
  //   logo: logoSd,
  // },
  // {
  //   institution: 'TK Lancang Kuning II Dumai',
  //   degree: 'Kindergarten',
  //   period: '2005 - 2006',
  //   logo: logoTk,
  // },
];
