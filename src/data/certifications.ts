import type { CertificationItem } from '../types';

export const initialCertificationsData: CertificationItem[] = [
  {
    id: 'hackviser-core',
    title: 'Certified Cybersecurity Foundations (CORE)',
    organization: 'Hackviser',
    date: '4 August 2026',
    credentialId: 'HV-CORE-R40VCHLJ',
    verificationUrl: 'https://hackviser.com/verify?id=HV-CORE-R40VCHLJ',
    topics: ['Cybersecurity Foundations', 'Vulnerability Assessment', 'Hands-on Security Labs', 'System Defense'],
    description: 'Completed cybersecurity training modules and practical security exercises demonstrating foundational cybersecurity competence on real-world target vectors.',
    badgeType: 'Hackviser',
    verified: true
  },
  {
    id: 'google-cybersecurity',
    title: 'Google Cybersecurity Professional Certificate',
    organization: 'Google / Coursera',
    date: '5 July 2026',
    topics: [
      'Foundations of Cybersecurity',
      'Manage Security Risks',
      'Networks & Network Security',
      'Linux & SQL Tools',
      'Assets, Threats & Vulnerabilities',
      'Detection & Incident Response',
      'Python Security Automation',
      'Cybersecurity Job Preparation'
    ],
    description: 'Completed comprehensive 8-course professional program by Google covering end-to-end security operations, threat detection, SIEM tools, Python automation, and risk mitigation.',
    badgeType: 'Google',
    verified: true
  },
  {
    id: 'simplilearn-ethical-hacking',
    title: "Ethical Hacking 101: Beginner's Guide to Ethical Hacking",
    organization: 'Simplilearn SkillUp',
    date: '29 June 2026',
    credentialId: '10406564',
    topics: ['Ethical Hacking Basics', 'Reconnaissance', 'Vulnerability Scanning', 'Network Threats'],
    description: 'Foundational certification covering ethical hacking concepts, penetration testing principles, footprinting, and fundamental defensive countermeasures.',
    badgeType: 'Simplilearn',
    verified: true
  },
  {
    id: 'ai-conclave-3',
    title: 'AI Conclave 3.0: The Spark That Elevates The Next Revolution',
    organization: 'Silver Oak University IEEE Student Branch, IEEE SOU SPS SBC & GDG on Campus SOU',
    date: '21 July 2026',
    topics: ['Artificial Intelligence', 'Emerging Technologies', 'Neural Systems', 'Tech Innovation'],
    description: 'Participated in AI Conclave 3.0 focusing on state-of-the-art developments in artificial intelligence, autonomous agents, and technological revolutions.',
    badgeType: 'IEEE',
    verified: true
  },
  {
    id: 'python-gen-ai-ieee',
    title: 'Python 101: Powering the Future of Generative AI',
    organization: 'Silver Oak University IEEE Student Branch & IEEE Gujarat Section PAC',
    date: '9–11 March 2026',
    topics: ['Python Scripting', 'Generative AI', 'Model Foundations', 'Automation'],
    description: 'Intensive 3-day practical workshop on leveraging Python for Generative AI applications, script optimization, and model integration.',
    badgeType: 'IEEE',
    verified: true
  },
  {
    id: 'aws-cloud-day-2025',
    title: 'AWS Cloud Clubs Student Community Day Ahmedabad 2025',
    organization: 'AWS Cloud Club at Silver Oak University',
    date: '12 December 2025',
    credentialId: 'SOU-20251223-DEC-65979',
    topics: ['AWS Cloud', 'Amazon SageMaker AI', 'Kiro Spec-Driven Dev', 'AWS IoT Greengrass', 'Machine Learning'],
    description: 'Hands-on participation in AWS Cloud Student Community Day exploring enterprise cloud infrastructure, SageMaker AI workflows, and IoT device security.',
    badgeType: 'AWS',
    verified: true
  },
  {
    id: 'ai-conclave-2',
    title: 'AI Conclave 2.0',
    organization: 'IEEE SPS Gujarat Section, IEEE Silver Oak University Student Branch & GDG SOU',
    date: '11 July 2025',
    topics: ['AI Agents', 'Computer Vision', 'Quantum Communication', 'Nanotechnology'],
    description: 'National symposium covering quantum communications, computer vision architectures, AI multi-agent orchestration, and nanotechnology.',
    badgeType: 'IEEE',
    verified: true
  }
];
