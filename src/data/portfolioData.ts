export interface SkillCategory {
  title: string;
  iconName: string;
  color: string;
  description: string;
  skills: { name: string; level: 'Proficient' | 'Intermediate' | 'Exploring'; icon?: string }[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Cybersecurity' | 'Web Development' | 'OSINT' | 'Tools';
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  image: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
  category: 'Certification' | 'Workshop' | 'Training' | 'IEEE Event';
  description: string;
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  category: 'IEEE Activity' | 'Workshop' | 'Committee' | 'Technical Event' | 'Academic';
  description: string;
  achievements: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "DIXIT DABHI",
    headline: "Cybersecurity Enthusiast | CSE Student | Ethical Hacking Explorer",
    subheadline: "B.Tech Computer Science & Engineering (Cybersecurity Specialization)",
    bioShort: "Building my skills in cybersecurity, programming, ethical hacking, and digital investigation while turning ideas into practical projects.",
    bioLong: "I'm Dixit Dabhi, a Computer Science & Engineering student specializing in Cybersecurity. I'm passionate about understanding how systems work, identifying vulnerabilities, exploring ethical hacking, and building practical technology projects. I continuously experiment with cybersecurity tools, programming, OSINT, digital forensics, and web technologies to strengthen my technical skills.",
    status: "Open to Learning & Opportunities",
    statusAvailable: true,
    location: "Gujarat, India",
    githubUrl: "https://github.com/Saiber2007",
    linkedinUrl: "https://www.linkedin.com/in/dixit-dabhi-76190b371/",
    referenceUrl: "https://dixitdabhi24.lovable.app/",
    email: "dixitdabhi2007@gmail.com",
  },

  stats: [
    { label: "Academic Path", value: "B.Tech CSE", subtext: "Cybersecurity Specialization", icon: "GraduationCap" },
    { label: "Core Interest", value: "Ethical Hacking", subtext: "OSINT & Forensics", icon: "ShieldCheck" },
    { label: "Hands-on Projects", value: "3+ Built", subtext: "Tools & Web Apps", icon: "FolderCode" },
    { label: "Workshops & Certs", value: "Active Learner", subtext: "IEEE & Tech Seminars", icon: "Award" }
  ],

  skillCategories: [
    {
      title: "Cybersecurity & Ethical Hacking",
      iconName: "Shield",
      color: "from-emerald-500 to-teal-400",
      description: "Core security domains, threat analysis, and reconnaissance techniques.",
      skills: [
        { name: "Ethical Hacking", level: "Intermediate" },
        { name: "OSINT Gathering", level: "Proficient" },
        { name: "Digital Forensics", level: "Intermediate" },
        { name: "Cybersecurity Fundamentals", level: "Proficient" },
        { name: "Network Security", level: "Intermediate" },
        { name: "Reconnaissance", level: "Proficient" }
      ]
    },
    {
      title: "Programming Languages",
      iconName: "Code2",
      color: "from-cyan-500 to-blue-500",
      description: "Languages used for scripting, automation, and core software engineering.",
      skills: [
        { name: "Python", level: "Proficient" },
        { name: "C", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" }
      ]
    },
    {
      title: "Web Development",
      iconName: "Globe",
      color: "from-blue-500 to-indigo-500",
      description: "Frontend tools and standards for building modern interactive web applications.",
      skills: [
        { name: "HTML5", level: "Proficient" },
        { name: "CSS3", level: "Proficient" },
        { name: "JavaScript (ES6+)", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Proficient" }
      ]
    },
    {
      title: "Tools & Environments",
      iconName: "Terminal",
      color: "from-emerald-400 to-cyan-500",
      description: "Operating systems, security utilities, and developer platforms.",
      skills: [
        { name: "Kali Linux", level: "Proficient" },
        { name: "Linux OS", level: "Proficient" },
        { name: "Git & GitHub", level: "Proficient" },
        { name: "VS Code", level: "Proficient" },
        { name: "Nmap / Recon Tools", level: "Intermediate" },
        { name: "Wireshark Basics", level: "Exploring" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "cyber-portfolio",
      title: "Personal Cybersecurity Portfolio",
      shortDescription: "A futuristic cybersecurity portfolio website showcasing technical skills, projects, certifications, and academic journey.",
      fullDescription: "Designed and engineered with a dark cybersecurity aesthetic, high-contrast neon accents, glassmorphic UI elements, interactive terminal simulator, and recruiter-friendly sections.",
      category: "Cybersecurity",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "https://github.com/Saiber2007",
      liveUrl: "https://dixitdabhi24.lovable.app/",
      featured: true,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Interactive command-line terminal visualizer with custom command suite",
        "Responsive glassmorphism design optimized for recruiters & engineering leads",
        "Structured skills matrix without misleading percentage metrics",
        "High-contrast dark mode with glowing cyber grid canvas background"
      ]
    },
    {
      id: "osint-recon-toolkit",
      title: "OSINT Recon Toolkit",
      shortDescription: "A beginner-friendly cybersecurity project exploring open-source intelligence concepts and automated reconnaissance.",
      fullDescription: "A practical modular toolkit built for gathering publicly available information, analyzing domain records, social footprinting, and metadata extraction.",
      category: "OSINT",
      technologies: ["Python", "OSINT Framework", "API Integration", "Bash", "JSON"],
      githubUrl: "https://github.com/Saiber2007",
      featured: true,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Automated domain WHOIS, DNS record lookup, and sub-domain enum scripts",
        "Clean CLI report generation for structured security assessment notes",
        "Explores footprinting and ethical OSINT methodologies"
      ]
    },
    {
      id: "cybersecurity-workshop",
      title: "Cybersecurity & Forensics Workshop Project",
      shortDescription: "A practical learning initiative covering introductory OSINT, packet analysis, and digital forensics concepts.",
      fullDescription: "Created during hands-on cybersecurity workshops to practice log inspection, memory artifact analysis, network packet capturing, and security concepts.",
      category: "Tools",
      technologies: ["Digital Forensics", "Wireshark", "Autopsy Basics", "Linux", "Kali Tools"],
      githubUrl: "https://github.com/Saiber2007",
      featured: true,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Analyzed pcap files for anomaly detection and clear-text credentials",
        "Investigated OSINT challenge tasks and forensic image verification",
        "Documented security findings and incident response workflow"
      ]
    }
  ] as Project[],

  certifications: [
    {
      id: "cert-1",
      title: "Cybersecurity & Hands-on Hacking Workshop",
      organization: "Technical Student Chapter & IEEE Events",
      date: "2024 - 2025",
      category: "Workshop",
      description: "Participated in hands-on technical sessions covering ethical hacking basics, network reconnaissance, and defense fundamentals.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cert-2",
      title: "OSINT & Digital Investigation Seminar",
      organization: "Cybersecurity Community & Student Workshops",
      date: "2024",
      category: "Training",
      description: "Explored public intelligence gathering, web investigation tools, metadata extraction techniques, and privacy protection.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cert-3",
      title: "IEEE Technical Event & Workshop Series",
      organization: "IEEE Student Branch",
      date: "2023 - Present",
      category: "IEEE Event",
      description: "Active engagement in technical workshops, guest lectures on emerging technologies, software development, and cybersecurity.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80"
    }
  ] as Certification[],

  experiences: [
    {
      id: "exp-1",
      role: "Active Member & Participant",
      organization: "IEEE Student Branch",
      period: "2023 - Present",
      category: "IEEE Activity",
      description: "Engaging in technology chapters, collaborating on technical workshops, attending cybersecurity guest talks, and expanding professional network.",
      achievements: [
        "Participated in student chapter hackathons and coding seminars",
        "Collaborated with peers on technical event logistics and web outreach"
      ]
    },
    {
      id: "exp-2",
      role: "Cybersecurity Workshop Explorer",
      organization: "CSE Department & Tech Clubs",
      period: "2024",
      category: "Workshop",
      description: "Completed intensive practical labs on OSINT, network vulnerability scanning with Nmap, Kali Linux tools, and ethical hacking basics.",
      achievements: [
        "Built OSINT recon scripts in Python for automated info gathering",
        "Practiced Linux command line utilities for log and network analysis"
      ]
    },
    {
      id: "exp-3",
      role: "Creative Committee Member",
      organization: "College Technical Festival / Student Events",
      period: "2023 - 2024",
      category: "Committee",
      description: "Contributed to event branding, visual designs, technical setup, and promotional materials for campus technical activities.",
      achievements: [
        "Coordinated with student leads to ensure smooth technical execution of college symposia",
        "Created digital visual assets for tech events and workshop announcements"
      ]
    },
    {
      id: "exp-4",
      role: "CSE Academic Projects",
      organization: "B.Tech Computer Science & Engineering",
      period: "2023 - Present",
      category: "Academic",
      description: "Developing practical software and security coursework projects focusing on algorithms, web tech, data structures, and cybersecurity concepts.",
      achievements: [
        "Engineered responsive front-end applications with modern JavaScript frameworks",
        "Studied cryptography fundamentals, TCP/IP stack, and secure coding practices"
      ]
    }
  ] as ExperienceItem[],

  resume: {
    education: {
      degree: "B.Tech in Computer Science & Engineering",
      specialization: "Specialization in Cybersecurity",
      status: "Currently Pursuing (Undergraduate Student)",
      focus: "Network Security, Operating Systems, Data Structures & Algorithms, Cryptography, Web Technologies"
    },
    summary: "Dedicated Computer Science & Engineering student specializing in Cybersecurity. Demonstrates strong interest in ethical hacking, OSINT, digital forensics, Python scripting, and web development. Eager to contribute to security operations, vulnerability testing, and innovative tech initiatives.",
    competencies: [
      "Ethical Hacking & Reconnaissance",
      "Open Source Intelligence (OSINT)",
      "Digital Forensics & Incident Basics",
      "Python Automation & CLI Tools",
      "Web Technologies (HTML, CSS, JS, React, Tailwind)",
      "Linux System Administration (Kali Linux)",
      "Network Protocol Fundamentals (TCP/IP, DNS, HTTP)",
      "Git / GitHub Version Control"
    ]
  }
};
