// ─────────────────────────────────────────────────────────────
//  Edit this file to personalise the whole portfolio.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Abdelalim',
  fullName: 'Abdelalim Ezzeroualy', // TODO: check spelling
  role: 'Full-Stack Software Developer',
  tagline: 'I build fast, reliable web apps — from Laravel APIs to polished React & Vue front-ends.',
  location: 'Morocco',
  email: 'mbs.fighter@gmail.com', // TODO: use the email you want public
  available: true,
  cv: '/cv.pdf', // drop your CV in /public/cv.pdf
  socials: [
    { label: 'GitHub', href: 'https://github.com/your-username' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/your-username' },
  ],
};

export const about = {
  paragraphs: [
    "I'm a software developer who enjoys turning complex business problems into simple, maintainable products. I've shipped dashboards, finance tools, HR platforms, e-signature apps and chatbots for real clients.",
    'I care about clean architecture, performance and the small details that make an interface feel great to use.',
  ],
  stats: [
    { value: 5, suffix: '+', label: 'Years of experience' },
    { value: 30, suffix: '+', label: 'Projects delivered' },
    { value: 15, suffix: '+', label: 'Happy clients' },
  ],
};

export const skills = [
  { group: 'Front-end', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Astro'] },
  { group: 'Back-end', items: ['PHP', 'Laravel', 'Node.js', 'REST APIs', 'Python'] },
  { group: 'Data & DevOps', items: ['MySQL', 'PostgreSQL', 'Redis', 'Docker', 'Git', 'Linux'] },
];

export const projects = [
  {
    title: 'LocaSign',
    description: 'Electronic signature platform for rental contracts with secure document flow and audit trail.',
    tags: ['Laravel', 'React', 'MySQL'],
    href: '#',
    repo: '#',
    accent: '#a3e635',
  },
  {
    title: 'Finance Dashboard',
    description: 'Real-time financial reporting dashboard with charts, exports and role-based access.',
    tags: ['Laravel API', 'Vue.js', 'Charts'],
    href: '#',
    repo: '#',
    accent: '#38bdf8',
  },
  {
    title: 'AssesRH',
    description: 'HR assessment platform to evaluate candidates and employees with custom scoring.',
    tags: ['Laravel', 'React', 'PostgreSQL'],
    href: '#',
    repo: '#',
    accent: '#f472b6',
  },
  {
    title: 'AvisBot',
    description: 'AI chatbot that collects and analyses customer reviews across channels.',
    tags: ['Node.js', 'AI', 'Webhooks'],
    href: '#',
    repo: '#',
    accent: '#fbbf24',
  },
];

export const experience = [
  {
    period: '2023 — Present',
    role: 'Full-Stack Developer',
    company: 'Company Name',
    description: 'Building and maintaining SaaS products end to end: APIs, dashboards and integrations.',
  },
  {
    period: '2021 — 2023',
    role: 'Web Developer',
    company: 'Company Name',
    description: 'Developed client web applications with Laravel and modern JavaScript frameworks.',
  },
  {
    period: '2020 — 2021',
    role: 'Junior Developer',
    company: 'Company Name',
    description: 'Started my journey shipping websites and internal tools.',
  },
];
