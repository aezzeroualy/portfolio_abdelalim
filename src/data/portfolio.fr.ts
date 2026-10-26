// ─────────────────────────────────────────────────────────────
//  French content. Links, emails and colours are shared with
//  portfolio.ts — only the text is translated here.
// ─────────────────────────────────────────────────────────────
import * as en from './portfolio';

export const profile = {
  ...en.profile,
  role: 'Développeur Full-Stack',
  tagline:
    'Je crée des applications web rapides et fiables — du back-end Laravel aux interfaces soignées en Vue.js & Tailwind.',
  location: 'Casablanca, Maroc',
};

export const about = {
  paragraphs: [
    "Je suis développeur full-stack basé à Casablanca, actuellement chez Qualiso. Auparavant, j'ai passé quatre ans chez NHS Agency à concevoir des sites et des applications web — de la conception de la base de données à la mise en production — pour des produits comme LeadGuru, DumDum et The Brands.",
    "Au-delà du code, je définis des règles de qualité, j'aide les développeurs à résoudre des problèmes techniques complexes et je travaille en étroite collaboration avec les équipes pour livrer des solutions informatiques solides.",
    "Je parle arabe, français et anglais, et j'accorde de l'importance à une architecture propre, à la résolution de problèmes et aux petits détails qui rendent une interface agréable à utiliser.",
  ],
  stats: [
    { value: 7, suffix: '+', label: "Années d'expérience" },
    { value: 20, suffix: '+', label: 'Technologies & API' },
    { value: 3, suffix: '', label: 'Langues parlées' },
  ],
  languages: ['Arabe', 'Français', 'Anglais'],
};

export const skills = [
  { ...en.skills[0], group: 'Front-end' },
  { ...en.skills[1], group: 'Back-end & Mobile' },
  { ...en.skills[2], group: 'API & Intégrations' },
];

export const softSkills = ['Résolution de problèmes', "Travail d'équipe", 'Gestion du temps'];

// French descriptions, keyed by project title
const projectText: Record<string, string> = {
  AutoSuite:
    'Plateforme de gestion et de location de flotte automobile — suivez, analysez et anticipez chaque mouvement de votre flotte.',
  LeadGuru:
    'Plateforme de gestion de leads pour gérer, suivre, collecter et qualifier vos prospects au même endroit.',
  DumDum:
    "Automatisation des campagnes sponsorisées Facebook & Instagram via l'API Facebook Marketing.",
  'The Brands': 'Un seul endroit pour gérer toutes vos marques.',
  'ASMA Invest':
    "Site institutionnel de la holding d'investissement saoudo-marocaine — présentation du groupe, pôles d'investissement, actualités et carrières.",
  Echo:
    'Plateforme de feedback client — gérez vos enquêtes de satisfaction et vos campagnes marketing depuis une seule plateforme.',
};
export const projects = en.projects.map((p) => ({ ...p, description: projectText[p.title] ?? p.description }));

export const experience = [
  {
    ...en.experience[0],
    period: 'Oct. 2023 — Aujourd’hui',
    role: 'Développeur Full-Stack',
    location: 'Casablanca-Settat, Maroc · Hybride',
    description: "Développeur full-stack à temps plein : conception et maintenance d'applications web.",
  },
  {
    ...en.experience[1],
    period: 'Oct. 2019 — Oct. 2023',
    role: 'Développeur Full-Stack',
    location: 'Casablanca, Maroc',
    description: "Conception et maintenance de produits web de bout en bout pour l'agence et ses clients.",
    highlights: [
      'Développement de sites et d’applications web',
      'Maintenance des applications existantes',
      'Analyse et conception de bases de données',
      'Définition et respect des règles de qualité du code',
      'Accompagnement des développeurs sur les problèmes techniques',
      'Collaboration avec les équipes pour livrer des solutions informatiques',
      'Développement et amélioration des outils internes',
      'Intégration du paiement PayPal',
    ],
  },
  {
    ...en.experience[2],
    period: 'Mars 2019',
    role: 'Développeur Android',
    location: 'Casablanca, Maroc',
    description: 'Développement d’une application mobile de gestion de bibliothèque.',
  },
];

export const education = [
  { ...en.education[0], title: 'Technicien Spécialisé en Développement Informatique' },
  { ...en.education[1], title: 'Première année de Biologie' },
  { ...en.education[2], title: 'Baccalauréat Sciences Expérimentales (SVT)' },
];

export const certifications = en.certifications.map((c) => ({ ...c, date: 'nov. 2020' }));
