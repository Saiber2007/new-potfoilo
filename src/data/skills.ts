import type { SkillCategory } from '../types';

export const initialSkillsData: SkillCategory[] = [
  {
    category: 'Cybersecurity',
    description: 'Core security operational areas, threat intelligence, and vulnerability research.',
    items: [
      { name: 'Ethical Hacking', level: 'Practical', tagColor: 'cyan' },
      { name: 'OSINT', level: 'Practical', tagColor: 'cyan' },
      { name: 'Digital Forensics', level: 'Practical', tagColor: 'cyan' },
      { name: 'Information Gathering', level: 'Practical', tagColor: 'green' },
      { name: 'Security Fundamentals', level: 'Familiar', tagColor: 'green' }
    ]
  },
  {
    category: 'Programming',
    description: 'Languages used for security automation, scripting, and software foundations.',
    items: [
      { name: 'Python', level: 'Practical', tagColor: 'cyan' },
      { name: 'C', level: 'Familiar', tagColor: 'purple' },
      { name: 'C++', level: 'Familiar', tagColor: 'purple' }
    ]
  },
  {
    category: 'Tools & Technologies',
    description: 'Operating systems, environment tools, and web development foundation.',
    items: [
      { name: 'Git', level: 'Practical', tagColor: 'green' },
      { name: 'GitHub', level: 'Practical', tagColor: 'green' },
      { name: 'Linux', level: 'Practical', tagColor: 'cyan' },
      { name: 'Kali Linux', level: 'Practical', tagColor: 'cyan' },
      { name: 'HTML', level: 'Familiar', tagColor: 'purple' },
      { name: 'CSS', level: 'Familiar', tagColor: 'purple' },
      { name: 'JavaScript', level: 'Familiar', tagColor: 'purple' }
    ]
  },
  {
    category: 'Other',
    description: 'Professional communication, documentation, and technical leadership.',
    items: [
      { name: 'Technical Presentation', level: 'Practical', tagColor: 'green' },
      { name: 'Canva', level: 'Practical', tagColor: 'green' },
      { name: 'Documentation', level: 'Practical', tagColor: 'green' },
      { name: 'Problem Solving', level: 'Practical', tagColor: 'green' }
    ]
  }
];
