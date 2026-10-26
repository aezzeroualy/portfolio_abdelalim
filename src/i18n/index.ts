import * as en from '../data/portfolio';
import * as fr from '../data/portfolio.fr';

export const languages = { en: 'EN', fr: 'FR' } as const;
export type Lang = keyof typeof languages;

const ui = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.cta': "Let's talk",
    'nav.menu': 'Open menu',
    'nav.theme': 'Toggle colour theme',
    'nav.switch': 'Version française',
    'hero.available': 'Available for new projects',
    'hero.title': "Hi, I'm {name}. I craft digital products.",
    'hero.basedIn': 'based in',
    'hero.work': 'View my work',
    'hero.contact': 'Contact me',
    'hero.photoAlt': 'Portrait of {name}',
    'hero.scroll': 'Scroll down',
    'about.label': 'About me',
    'about.title': 'Code with purpose, design with care.',
    'about.languages': 'Languages:',
    'skills.label': 'Skills & stack',
    'skills.title': 'Tools I use to bring ideas to life.',
    'skills.soft': 'Soft skills:',
    'projects.label': 'Selected work',
    'projects.title': 'Featured projects.',
    'projects.intro': 'A few products I designed, built and shipped — from APIs to pixel-perfect interfaces.',
    'projects.visit': 'Visit site',
    'projects.code': 'Source code',
    'projects.shot': 'Screenshot of {name}',
    'exp.label': 'Experience',
    'exp.title': "Where I've been.",
    'edu.label': 'Education',
    'edu.title': 'Where I learned.',
    'cert.label': 'Certifications',
    'cert.title': 'Licences & certificates.',
    'cert.issued': 'Issued',
    'cert.id': 'Credential ID:',
    'cert.view': 'View credential',
    'contact.label': 'Contact',
    'contact.title': "Let's build something great together.",
    'contact.text': 'Have a project in mind or an opportunity? My inbox is always open.',
    'contact.cv': 'Download CV',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with Astro, Tailwind & GSAP.',
  },
  fr: {
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.experience': 'Parcours',
    'nav.contact': 'Contact',
    'nav.cta': 'Discutons',
    'nav.menu': 'Ouvrir le menu',
    'nav.theme': 'Changer le thème',
    'nav.switch': 'English version',
    'hero.available': 'Disponible pour de nouveaux projets',
    'hero.title': 'Salut, je suis {name}. Je crée des produits digitaux.',
    'hero.basedIn': 'basé à',
    'hero.work': 'Voir mes projets',
    'hero.contact': 'Me contacter',
    'hero.photoAlt': 'Portrait de {name}',
    'hero.scroll': 'Défiler vers le bas',
    'about.label': 'À propos',
    'about.title': 'Du code utile, un design soigné.',
    'about.languages': 'Langues :',
    'skills.label': 'Compétences & outils',
    'skills.title': "Les outils que j'utilise pour donner vie aux idées.",
    'skills.soft': 'Savoir-être :',
    'projects.label': 'Réalisations',
    'projects.title': 'Projets phares.',
    'projects.intro': "Quelques produits que j'ai conçus, développés et livrés — des API aux interfaces au pixel près.",
    'projects.visit': 'Voir le site',
    'projects.code': 'Code source',
    'projects.shot': "Capture d'écran de {name}",
    'exp.label': 'Expérience',
    'exp.title': 'Mon parcours.',
    'edu.label': 'Formation',
    'edu.title': "Où j'ai appris.",
    'cert.label': 'Certifications',
    'cert.title': 'Licences & certificats.',
    'cert.issued': 'Délivré en',
    'cert.id': 'Identifiant :',
    'cert.view': 'Voir le diplôme',
    'contact.label': 'Contact',
    'contact.title': 'Construisons quelque chose de grand ensemble.',
    'contact.text': 'Un projet en tête ou une opportunité ? Ma boîte mail est toujours ouverte.',
    'contact.cv': 'Télécharger le CV',
    'footer.rights': 'Tous droits réservés.',
    'footer.built': 'Réalisé avec Astro, Tailwind & GSAP.',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return (key: UiKey, vars: Record<string, string> = {}) =>
    ui[lang][key].replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? `{${k}}`);
}

export function getContent(lang: Lang) {
  return lang === 'fr' ? fr : en;
}

export function getLang(url: URL): Lang {
  return url.pathname.startsWith('/fr') ? 'fr' : 'en';
}

/** Home page URL for a language. */
export function homeUrl(lang: Lang) {
  return lang === 'fr' ? '/fr/' : '/';
}
