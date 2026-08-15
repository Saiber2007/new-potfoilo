import type { AchievementItem } from '../types';

export const initialAchievementsData: AchievementItem[] = [
  {
    id: 'ieee-creative-lead',
    title: 'IEEE Student Branch — Creative Committee Member',
    role: 'Active Member & Technical Volunteer',
    period: '2024 - Present',
    organization: 'IEEE Silver Oak University Student Branch',
    description: 'Contributing active membership to event design, event technical management, poster artwork, and student community outreach.',
    highlights: [
      'Co-organized technical workshops including AI Conclave 2.0 & 3.0',
      'Designed technical materials for community seminars',
      'Fostered cybersecurity awareness among junior engineering peers'
    ],
    category: 'IEEE'
  },
  {
    id: 'workshop-speaker-osint',
    title: 'Cybersecurity Workshop Facilitator — OSINT & Digital Forensics',
    role: 'Lead Presenter & Demonstrator',
    period: '2025 - 2026',
    organization: 'Silver Oak University Technical Events',
    description: 'Spearheaded hands-on introductory sessions demystifying open-source intelligence gathering techniques and basic digital evidence handling.',
    highlights: [
      'Demonstrated real-time passive OSINT reconnaissance techniques',
      'Trained participants in digital footprint auditing & privacy preservation',
      'Formulated forensic lab documentation and student resource kits'
    ],
    category: 'Speaker'
  },
  {
    id: 'ctf-research-labs',
    title: 'Security Research & CTF Challenge Practice',
    role: 'Security Explorer',
    period: '2024 - Present',
    organization: 'Self-Directed / Hackviser / TryHackMe / Community CTFs',
    description: 'Actively honing practical security skills through hands-on virtual lab machines, cryptography challenges, and web exploitation scenarios.',
    highlights: [
      'Earned Hackviser CORE Certified Cybersecurity Foundations credential',
      'Continuous practice in Linux administration, Bash automation, and privilege analysis',
      'Focusing on Python tool development for security tasks'
    ],
    category: 'CTF'
  }
];
