import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    return (saved as Language) || 'en'
  })

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

// Traductions
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Webfolio',
    'hero.subtitle.part1': 'Crafting elegant web experiences with',
    'hero.subtitle.clean': 'clean code',
    'hero.subtitle.part2': 'and',
    'hero.subtitle.creative': 'creative design',
    'hero.cta': 'View My Work',

    // Skills
    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'Building modern web experiences with cutting-edge technologies',
    'skills.professional': 'Professional Skills',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend & Database',
    'skills.tools': 'Tools & Workflow',
    'skills.beyond': 'Beyond Code',
    
    // Professional Skills
    'skill.problemSolving': 'Problem Solving',
    'skill.problemSolving.desc': 'Analytical thinking & debugging',
    'skill.attention': 'Attention to Detail',
    'skill.attention.desc': 'Pixel-perfect & accessible design',
    'skill.teamwork': 'Team Collaboration',
    'skill.teamwork.desc': 'Git workflow & code reviews',
    'skill.learning': 'Continuous Learning',
    'skill.learning.desc': 'Always improving & adapting',
    'skill.agile': 'Agile Methodology',
    'skill.agile.desc': 'Scrum & sprint planning',
    'skill.communication': 'Communication',
    'skill.communication.desc': 'Clear documentation & feedback',
    'skill.timeManagement': 'Time Management',
    'skill.timeManagement.desc': 'Meeting deadlines efficiently',

    // Beyond Code
    'beyond.education': 'Education',
    'beyond.education.desc': 'Computer Science Degree - IUT Valence',
    'beyond.design': 'UI/UX Design',
    'beyond.design.desc': 'Passionate about user experience',
    'beyond.fitness': 'Fitness',
    'beyond.fitness.desc': 'Healthy body, healthy mind',

    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': "A selection of projects I've worked on, showcasing my skills in web development, design, and problem-solving.",

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Passionate about creating seamless digital experiences that combine aesthetics with functionality.',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': "Let's work together on your next project",
    'contact.availability': 'Available for freelance opportunities and collaborations',
    'contact.form.title': 'Send a Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.placeholder.name': 'John Doe',
    'contact.form.placeholder.email': 'john@example.com',
    'contact.form.placeholder.message': 'Tell me about your project...',
    'contact.form.send': 'Send Message',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.location.value': 'France',
    'contact.follow': 'Follow Me',
    'contact.resume': 'Resume',
    'contact.download': 'Download CV',
  },
  fr: {
    // Navbar
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Webfolio',
    'hero.subtitle.part1': 'Création d\'expériences web élégantes avec',
    'hero.subtitle.clean': 'du code propre',
    'hero.subtitle.part2': 'et',
    'hero.subtitle.creative': 'un design créatif',
    'hero.cta': 'Voir mes travaux',

    // Skills
    'skills.title': 'Compétences & Technologies',
    'skills.subtitle': 'Construire des expériences web modernes avec des technologies de pointe',
    'skills.professional': 'Compétences Professionnelles',
    'skills.frontend': 'Développement Frontend',
    'skills.backend': 'Backend & Base de données',
    'skills.tools': 'Outils & Workflow',
    'skills.beyond': 'Au-delà du Code',

    // Professional Skills
    'skill.problemSolving': 'Résolution de Problèmes',
    'skill.problemSolving.desc': 'Pensée analytique & débogage',
    'skill.attention': 'Attention aux Détails',
    'skill.attention.desc': 'Design pixel-perfect & accessible',
    'skill.teamwork': 'Collaboration en Équipe',
    'skill.teamwork.desc': 'Workflow Git & revues de code',
    'skill.learning': 'Apprentissage Continu',
    'skill.learning.desc': 'Toujours en amélioration & adaptation',
    'skill.agile': 'Méthodologie Agile',
    'skill.agile.desc': 'Scrum & planification de sprint',
    'skill.communication': 'Communication',
    'skill.communication.desc': 'Documentation claire & retours',
    'skill.timeManagement': 'Gestion du Temps',
    'skill.timeManagement.desc': 'Respect des délais efficacement',

    // Beyond Code
    'beyond.education': 'Formation',
    'beyond.education.desc': 'BUT Informatique - IUT Valence',
    'beyond.design': 'Design UI/UX',
    'beyond.design.desc': 'Passionné par l\'expérience utilisateur',
    'beyond.fitness': 'Sport',
    'beyond.fitness.desc': 'Un corps sain, un esprit sain',

    // Projects
    'projects.title': 'Mes Projets',
    'projects.subtitle': 'Une sélection de projets sur lesquels j\'ai travaillé, mettant en valeur mes compétences en développement web, design et résolution de problèmes.',

    // About
    'about.title': 'À propos de moi',
    'about.subtitle': 'Passionné par la création d\'expériences numériques alliant esthétique et fonctionnalité.',

    // Contact
    'contact.title': 'Me Contacter',
    'contact.subtitle': 'Travaillons ensemble sur votre prochain projet',
    'contact.availability': 'Disponible pour des opportunités freelance et collaborations',
    'contact.form.title': 'Envoyer un Message',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.placeholder.name': 'Jean Dupont',
    'contact.form.placeholder.email': 'jean@example.com',
    'contact.form.placeholder.message': 'Parlez-moi de votre projet...',
    'contact.form.send': 'Envoyer',
    'contact.email': 'Email',
    'contact.location': 'Localisation',
    'contact.location.value': 'France',
    'contact.follow': 'Me Suivre',
    'contact.resume': 'CV',
    'contact.download': 'Mon CV',
  },
}
