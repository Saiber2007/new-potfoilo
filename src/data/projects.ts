import type { ProjectItem } from '../types';

export const initialProjectsData: ProjectItem[] = [
  {
    id: 'cyber-portfolio',
    title: 'Cybersecurity Portfolio Website',
    description: 'Designed and deployed a dark, cyberpunk-themed personal portfolio focused on presenting cybersecurity skills, projects, certifications, achievements, and professional profile information.',
    longDescription: 'A production-grade command-center styled web platform built to showcase security engineering competencies, certifications, live interactive birthday metrics, and verified credentials. Features custom WebGL particle networks, Om cursor interaction, and encrypted admin controls.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'Completed',
    liveUrl: 'https://dixitdabhi24.lovable.app',
    githubUrl: 'https://github.com/Saiber2007',
    featured: true,
    category: 'Web',
    badge: 'LIVE SYSTEM'
  },
  {
    id: 'osint-recon-toolkit',
    title: 'OSINT Recon Toolkit',
    description: 'Experimented with open-source intelligence techniques to build a lightweight toolkit concept for information gathering and digital footprint research.',
    longDescription: 'Automated Python framework designed for passive domain discovery, threat surface mapping, metadata extraction, and footprint intelligence collection using public OSINT feeds.',
    technologies: ['Python', 'OSINT', 'Information Gathering', 'Reconnaissance', 'Linux'],
    status: 'In Progress',
    githubUrl: 'https://github.com/Saiber2007',
    featured: true,
    category: 'Toolkit',
    badge: 'SECURITY TOOL'
  },
  {
    id: 'cyber-workshop-osint',
    title: 'Cybersecurity Workshop — OSINT & Digital Forensics',
    description: 'Developed workshop material covering introductory OSINT, information gathering, digital footprinting, evidence concepts, and basic digital-forensics workflows.',
    longDescription: 'Created comprehensive hands-on lab exercises, practical demonstrations, and presentation decks used to train engineering students in ethical intelligence gathering and forensic preservation principles.',
    technologies: ['OSINT', 'Digital Forensics', 'Cybersecurity', 'Technical Presentation', 'Canva'],
    status: 'Completed',
    featured: true,
    category: 'Workshop',
    badge: 'IEEE WORKSHOP'
  }
];
