
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

export const projects: Project[] = [
  {
    id: 'agraris-karir',
    number: '02',
    title: 'Agraris Karir',
    description:
      'Platform internal Agraris Indonesia untuk mengelola seluruh proses program magang, mulai dari pendaftaran hingga pengelolaan aktivitas peserta.',
    role: 'Project Lead & Fullstack Developer',
    year: '2026',
    type: 'Internal Platform',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    href: '#',
    image: '/projects/agraris-karir.png',
    details:
      'Platform internal untuk mengelola siklus program magang, termasuk proses pendaftaran, aktivitas peserta, dan pengelolaan program.',
    category: 'Internal Platform',
    gallery: ['/projects/agraris-karir.png'],
    ownership: 'Agraris Indonesia',
    team: 'Product Development Team',
    demoUrl: "https://agrarisindonesia.com/karir/",
    repositoryUrl: "https://github.com/rasyidMuhammad12/AgrarisCareer",
    responsibilities: [
      'Memimpin proses pengembangan platform.',
      'Mengembangkan frontend dan backend menggunakan Next.js.',
      'Membangun antarmuka berdasarkan kebutuhan pengguna.',
      'Mengelola implementasi fitur dan alur program magang.'
    ],
    features: [
      'Dashboard pengguna, mentor, dan admin.',
      'Pengelolaan program magang.',
      'Pencatatan aktivitas dan logbook peserta.',
      'Pengelolaan informasi peserta dan mentor.'
    ],
    impacts: [
      'Mendukung pengelolaan program magang dalam satu platform.',
      'Membantu menyusun aktivitas peserta secara terstruktur.',
      'Mempermudah koordinasi antara peserta, mentor, dan admin.'
    ]
  },
  {
    id: 'voltify',
    number: '05',
    title: 'Voltify',
    description:
    'Mobile app untuk membantu pengguna memantau penggunaan listrik, memprediksi tagihan, dan mendapatkan rekomendasi penghematan energi.',
    role: 'Product Designer & Developer',
    year: '2026',
    type: 'Mobile App',
    technologies: ['Flutter', 'Dart', 'UI/UX'],
    href: '#',
    image: '/projects/voltify.png',
    details:
    'Aplikasi untuk memantau konsumsi listrik, memperkirakan tagihan, dan memberikan rekomendasi penghematan energi.',
    category: 'Energy & Mobile App',
    gallery: ['/projects/voltify.png'],
    ownership: 'Personal Product Concept',
    team: 'Independent Project',
    demoUrl: null,
    repositoryUrl: null,
    responsibilities: [
      'Merancang konsep dan alur pengalaman pengguna.',
      'Menyusun antarmuka aplikasi mobile.',
      'Mengembangkan konsep fitur pemantauan penggunaan listrik.'
    ],
    features: [
      'Pemantauan penggunaan listrik.',
      'Prediksi biaya listrik.',
      'Rekomendasi penghematan energi.',
      'Informasi penggunaan listrik berdasarkan perangkat.'
    ],
    impacts: [
      'Membantu pengguna memahami pola penggunaan listrik.',
      'Memberikan gambaran biaya dan peluang penghematan energi.'
    ]
  },
  {
    id: 'asn-berakhlak',
    number: '01',
    title: 'ASN-BerAKHLAK',
    description:
      'Platform web untuk membantu pengelolaan, pengumpulan, dan verifikasi bukti kegiatan ASN BerAKHLAK pada lingkungan pemerintahan.',
    role: 'Fullstack Developer',
    year: '2025',
    type: 'Government',
    technologies: ['Next.js', 'Laravel', 'MySQL'],
    href: '#',
    image: '/projects/asn-berakhlak.png',
    details:
      'Platform untuk mendukung proses pengumpulan dan verifikasi bukti kegiatan ASN BerAKHLAK pada lingkungan pemerintahan.',
    category: 'Government Platform',
    gallery: ['/projects/asn-berakhlak.png', '/projects/asn-berakhlak.png'],
    ownership: 'Government Web Project',
    team: 'Development Team',
    demoUrl: null,
    repositoryUrl: null,
    responsibilities: [
      'Mengembangkan antarmuka dan fungsionalitas aplikasi.',
      'Mengintegrasikan frontend dengan API backend.',
      'Mendukung pengelolaan dan verifikasi bukti kegiatan.'
    ],
    features: [
      'Pengunggahan bukti kegiatan ASN BerAKHLAK.',
      'Pengelolaan data OPD.',
      'Proses verifikasi bukti kegiatan.',
      'Dashboard berdasarkan peran pengguna.'
    ],
    impacts: [
      'Membantu memusatkan pengumpulan bukti kegiatan.',
      'Mendukung proses verifikasi yang lebih terstruktur.',
      'Mempermudah pengelolaan data kegiatan.'
    ]
  },
  {
    id: 'dident',
    number: '04',
    title: 'dIdent',
    description:
    'Platform digital identity verification yang menggabungkan OCR, face verification, blockchain, dan Web3 untuk proses verifikasi identitas.',
    role: 'Fullstack Developer',
    year: '2025',
    type: 'Web3 / Blockchain',
    technologies: ['Next.js', 'ICP', 'Motoko'],
    href: '#',
    image: '/projects/dident.png',
    details:
      'Platform verifikasi identitas digital yang menggabungkan ekstraksi informasi dokumen, verifikasi wajah, dan teknologi blockchain.',
    category: 'Blockchain & Web3',
    gallery: ['/projects/dident.png'],
    ownership: 'Digital Identity Project',
    team: 'Project Development Team',
    demoUrl: null,
    repositoryUrl: null,
    responsibilities: [
      'Mengembangkan antarmuka aplikasi.',
      'Mengintegrasikan proses OCR dan verifikasi wajah.',
      'Menghubungkan frontend dengan backend berbasis Internet Computer.',
      'Mendukung integrasi fitur Web3.'
    ],
    features: [
      'Ekstraksi informasi dokumen menggunakan OCR.',
      'Verifikasi wajah.',
      'Integrasi blockchain melalui Internet Computer.',
      'Pengelolaan alur verifikasi identitas.'
    ],
    impacts: [
      'Menggabungkan beberapa proses verifikasi dalam satu alur.',
      'Mengeksplorasi penggunaan blockchain untuk identitas digital.'
    ]
  },
  {
    id: 'sirusun',
    number: '03',
    title: 'Sirusun',
    description:
      'Website layanan Pemerintah Provinsi Palembang untuk membantu masyarakat melakukan pemesanan dan pengelolaan hunian rumah susun.',
    role: 'Frontend Developer',
    year: '2024',
    type: 'Government',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    href: '#',
    image: '/projects/sirusun.png',
    details:
      'Website layanan rumah susun dengan fokus pada pengalaman pengguna dalam melakukan pemesanan dan pengelolaan hunian.',
    category: 'Government Web Application',
    gallery: ['/projects/sirusun.png'],
    ownership: 'Government Web Project',
    team: 'Development Team',
    demoUrl: "https://sirusun.palembang.go.id/",
    repositoryUrl: "https://github.com/rasyidMuhammad12/sirusun",
    responsibilities: [
      'Mengembangkan antarmuka website.',
      'Menerapkan desain antarmuka menjadi halaman web.',
      'Memastikan tampilan responsif pada berbagai ukuran layar.'
    ],
    features: [
      'Informasi layanan rumah susun.',
      'Antarmuka pemesanan hunian.',
      'Pengelolaan informasi hunian.'
    ],
    impacts: [
      'Menyediakan akses informasi hunian melalui website.',
      'Mendukung digitalisasi layanan pengelolaan rumah susun.'
    ]
  },
];
