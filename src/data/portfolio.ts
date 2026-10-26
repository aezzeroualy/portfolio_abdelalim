// ─────────────────────────────────────────────────────────────
//  English content. The French text lives in portfolio.fr.ts —
//  update both when you change something.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Abdel-Alim',
  fullName: 'Abdel-Alim Ez-Zeroualy',
  role: 'Full-Stack Developer',
  tagline: 'I build fast, reliable web apps — from Laravel back-ends to polished Vue.js & Tailwind front-ends.',
  location: 'Casablanca, Morocco',
  email: 'a.ezzeroualy@gmail.com',
  available: true,
  cv: '/cv.pdf', // drop your CV in /public/cv.pdf
  socials: [
    { label: 'GitHub', href: 'https://github.com/your-username' }, // TODO: your GitHub URL
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdelalim-ezzeroualy-97813317a/' },
  ],
};

export const about = {
  paragraphs: [
    "I'm a full-stack developer based in Casablanca, currently working at Qualiso. Before that I spent four years at NHS Agency building websites and web applications — from database design to production — for products like LeadGuru, DumDum and The Brands.",
    'Beyond writing code, I define code-quality guidelines, help fellow developers solve tough technical problems and work closely with teams to deliver solid IT solutions.',
    'I speak Arabic, French and English, and I care about clean architecture, problem solving and the small details that make an interface feel great to use.',
  ],
  stats: [
    { value: 7, suffix: '+', label: 'Years of experience' },
    { value: 20, suffix: '+', label: 'Technologies & APIs' },
    { value: 3, suffix: '', label: 'Languages spoken' },
  ],
  languages: ['Arabic', 'French', 'English'],
};

export const skills = [
  {
    group: 'Front-end',
    items: ['Vue.js', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'React', 'TypeScript'],
  },
  {
    group: 'Back-end & Mobile',
    items: ['PHP', 'Laravel', 'Livewire', 'WordPress', 'MySQL', 'Flutter', 'C#', 'C'],
  },
  {
    group: 'APIs & Integrations',
    items: ['Facebook API', 'PayPal API', 'Google API', 'REST APIs', 'Git'],
  },
];

import autosuiteImg from '../assets/projects/autosuite.png';
import leadguruImg from '../assets/projects/leadguru.png';
import theBrandsImg from '../assets/projects/thebrands.png';
import asmaInvestImg from '../assets/projects/asmainvest.png';
import echoImg from '../assets/projects/echo.png';

export const softSkills = ['Problem solving', 'Teamwork', 'Time management'];

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  accent: string;
  /** Screenshot in src/assets/projects — falls back to the first letter. */
  image?: ImageMetadata;
};

export const projects: Project[] = [
  {
    title: 'AutoSuite',
    description:
      'Vehicle fleet management and rental platform — track, analyse and anticipate every movement of your fleet.',
    tags: ['Fleet management', 'Rental', 'Web app'],
    href: 'https://autosuite.locafinance.com/',
    accent: '#dc2626',
    image: autosuiteImg,
  },
  {
    title: 'LeadGuru',
    description: 'Lead management platform to manage, track, collect and qualify prospects in one place.',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    href: 'https://leadguru.ma/',
    accent: '#ef4444',
    image: leadguruImg,
  },
  {
    title: 'DumDum',
    description: 'Automation of sponsored Facebook & Instagram campaigns through the Facebook Marketing API.',
    tags: ['Laravel', 'Facebook API', 'Automation'],
    href: 'https://dumdum.works',
    accent: '#f43f5e',
  },
  {
    title: 'The Brands',
    description: 'A single place to manage all your brands.',
    tags: ['Laravel', 'Livewire', 'Tailwind'],
    href: 'http://thebrands.club/',
    accent: '#fb923c',
    image: theBrandsImg,
  },
  {
    title: 'ASMA Invest',
    description:
      'Corporate website for the Saudi-Moroccan investment holding — group overview, investment sectors, news and careers.',
    tags: ['Corporate website', 'Responsive'],
    href: 'https://asmainvest.ma/',
    accent: '#16a34a',
    image: asmaInvestImg,
  },
  {
    title: 'Echo',
    description:
      'Customer feedback platform — run satisfaction surveys and marketing campaigns from a single place.',
    tags: ['SaaS', 'Surveys', 'Marketing'],
    href: 'https://echo.avis.ma',
    accent: '#10b981',
    image: echoImg,
  },
];

export const experience = [
  {
    period: 'Oct 2023 — Present',
    role: 'Full-Stack Developer',
    company: 'Qualiso',
    location: 'Casablanca-Settat, Morocco · Hybrid',
    description: 'Full-time full-stack developer building and maintaining web applications.',
    highlights: [] as string[],
  },
  {
    period: 'Oct 2019 — Oct 2023',
    role: 'Full-Stack Developer',
    company: 'NHS Agency',
    location: 'Casablanca, Morocco',
    description: 'Built and maintained web products end to end for the agency and its clients.',
    highlights: [
      'Building websites and web applications',
      'Maintaining existing applications',
      'Analysing and designing databases',
      'Defining and enforcing code-quality guidelines',
      'Helping developers solve technical problems',
      'Collaborating with teams to deliver IT solutions',
      'Building and improving internal tools',
      'PayPal payment integration',
    ],
  },
  {
    period: 'Mar 2019',
    role: 'Android Developer',
    company: 'Faculté des Sciences Ben M’Sik',
    location: 'Casablanca, Morocco',
    description: 'Built a mobile application for library management.',
    highlights: [] as string[],
  },
];

export const education = [
  {
    period: '2017 — 2019',
    title: 'Specialized Technician in Software Development',
    school: 'ISGI (Institut Supérieur de Gestion et d’Informatique)',
  },
  {
    period: '2016 — 2017',
    title: 'First year of Biology',
    school: 'Faculté des Sciences Ben M’Sik',
  },
  {
    period: '2015 — 2016',
    title: 'Baccalaureate in Experimental Sciences (Life & Earth Sciences)',
    school: 'Lycée Al Azhar',
  },
];

export const certifications = [
  {
    title: 'cPanel Professional Certification (CPP)',
    issuer: 'cPanel',
    date: 'Nov 2020',
    credentialId: 'dd98-9395-7a1d-0c82',
    href: '/cpanel-certificate.pdf',
  },
];
