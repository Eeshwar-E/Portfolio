export const navLinks = [
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'education', label: 'education' }
]

export const homeCards = [
  {
    id: 'projects',
    icon: '📁',
    title: 'Projects',
    subtitle: '4 featured builds',
    action: 'explore →'
  },
  {
    id: 'about',
    icon: '👤',
    title: 'About',
    subtitle: 'Skills & contact',
    action: 'learn more →'
  },
  {
    id: 'education',
    icon: '🎓',
    title: 'Education',
    subtitle: 'B.Tech · CGPA 7.93',
    action: 'view →'
  }
]

export const projects = [
  {
    name: 'AI Contract Analyzer',
    year: '2026',
    repo: 'https://github.com/Eeshwar-E/ai-contract-analyzer',
    path: 'eeshwar-e / ai-contract-analyzer',
    description: 'Built a transformer-based NLP pipeline for classifying legal clauses across 40+ contract categories with high precision, plus semantic search for contextual clause retrieval.',
    tags: [
      { label: 'Python', style: 'green' },
      { label: 'FastAPI', style: 'blue' },
      { label: 'React', style: 'blue' },
      { label: 'Transformers', style: 'purple' },
      { label: 'PostgreSQL', style: 'amber' }
    ]
  },
  {
    name: 'EMG based Prosthetic Arm',
    year: '2026',
    repo: 'https://drive.google.com/file/d/1N9ibjSvJwfAW_AZYme2Qx6jobZ_x6sBs/view?usp=sharing',
    path: 'eeshwar-e / emg-prosthetic-arm',
    description: 'Developed an ESP32-based EMG acquisition pipeline and trained a CNN-LSTM model for real-time hand gesture classification with robust preprocessing.',
    tags: [
      { label: 'Python', style: 'green' },
      { label: 'CNN-LSTM', style: 'purple' },
      { label: 'ESP32', style: 'amber' },
      { label: 'Embedded AI', style: 'coral' },
      { label: 'Signal Processing', style: 'teal' }
    ]
  },
  {
    name: 'Resume Evaluation System',
    year: '2025',
    repo: 'https://github.com/Eeshwar-E/HR-ChatBot',
    path: 'eeshwar-e / HR-ChatBot',
    description: 'Created an intelligent resume parser that extracts structured candidate data from PDFs and a secure Node.js backend with JWT auth, RBAC, and recruiter search APIs.',
    tags: [
      { label: 'React', style: 'blue' },
      { label: 'Node.js', style: 'blue' },
      { label: 'Express.js', style: 'blue' },
      { label: 'PostgreSQL', style: 'amber' },
      { label: 'JWT', style: 'teal' }
    ]
  },
  {
    name: 'SMART Disaster Relief',
    year: '2025',
    repo: 'https://github.com/Eeshwar-E/SMART-Disaster-Management-System',
    path: 'eeshwar-e / smart-disaster-relief',
    description: 'Built a real-time relief operations platform with role-based access control and React dashboards for resource and volunteer tracking.',
    tags: [
      { label: 'React', style: 'blue' },
      { label: 'PostgreSQL', style: 'amber' },
      { label: 'RBAC', style: 'teal' },
      { label: 'SQL Optimisation', style: 'amber' }
    ]
  },
  {
    name: 'Zithub',
    year: '2024',
    repo: 'https://github.com/Eeshwar-E/ZitHub-VCS',
    path: 'eeshwar-e / ZitHub-VCS',
    description: 'Implemented a Git-inspired VCS with Merkle Tree integrity checks, staging and commit workflows, and delta-compression to reduce storage while preserving history.',
    tags: [
      { label: 'Python', style: 'green' },
      { label: 'Flask', style: 'blue' },
      { label: 'SQLite', style: 'amber' },
      { label: 'Merkle Trees', style: 'coral' },
      { label: 'Delta Compression', style: 'coral' }
    ]
  },
  {
    name: 'CWRU Bearing Fault Detection',
    year: '2025',
    path: 'eeshwar-e / bearing-fault-detection',
    description: 'Built an industrial ML pipeline for classifying bearing faults using Random Forest and SVM on CWRU vibration data with PCA feature reduction and cross-validation.',
    tags: [
      { label: 'Python', style: 'green' },
      { label: 'Scikit-learn', style: 'purple' },
      { label: 'PCA', style: 'purple' },
      { label: 'Random Forest', style: 'purple' },
      { label: 'SVM', style: 'purple' }
    ]
  },
  {
    name: 'Document Reader',
    year: '2026',
    repo: 'https://github.com/Eeshwar-E/Document-Reader',
    path: 'eeshwar-e / Document-Reader',
    description: 'Developed a document and image reader that extracts text from scanned pages and pictures for simplified data capture from mixed media.',
    tags: [
      { label: 'Python', style: 'green' },
      { label: 'OCR', style: 'purple' },
      { label: 'Data Extraction', style: 'teal' }
    ]
  },
  {
    name: 'Finance Dashboard Demo',
    year: '2026',
    repo: 'https://github.com/Eeshwar-E/Finance_Dashboard_Demo',
    path: 'eeshwar-e / Finance_Dashboard_Demo',
    description: 'Built an interactive finance dashboard demo with React and JavaScript to visualize portfolio metrics and market trends.',
    tags: [
      { label: 'React', style: 'blue' },
      { label: 'JavaScript', style: 'blue' },
      { label: 'UI', style: 'amber' }
    ]
  }
]

export const aboutSections = [
  {
    label: 'Languages',
    items: ['Python', 'JavaScript', 'C++', 'C'],
    style: 'green'
  },
  {
    label: 'Web Development',
    items: ['React.js', 'HTML', 'CSS', 'FastAPI', 'Node.js', 'Express.js', 'Flask'],
    style: 'blue'
  },
  {
    label: 'AI / ML',
    items: ['Transformers', 'Scikit-learn', 'NLP', 'LLM Applications', 'CNN-LSTM', 'Signal Processing'],
    style: 'purple'
  },
  {
    label: 'Databases & Tools',
    items: ['PostgreSQL', 'SQLite', 'MySQL', 'Git', 'GitHub', 'Linux', 'REST APIs'],
    style: 'amber'
  },
  {
    label: 'Core Concepts',
    items: ['DSA', 'System Design', 'Embedded AI', 'Computer Architecture', 'Operating Systems', 'DBMS'],
    style: 'teal'
  }
]

export const contactItems = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'eeshwarelango@gmail.com',
    href: 'mailto:eeshwarelango@gmail.com'
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    value: 'linkedin.com/in/eeshwar-e',
    href: 'https://linkedin.com/in/eeshwar-e'
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/Eeshwar-E',
    href: 'https://github.com/Eeshwar-E'
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91-6382878165'
  }
]

export const educationItems = [
  {
    degree: 'B.Tech — Computer and Communication Engineering',
    institution: 'Amrita Vishwa Vidyapeetham, Coimbatore',
    period: 'Aug 2023 — May 2027',
    score: 'CGPA 7.94',
    courses: [
      'Computer Architecture',
      'Operating Systems',
      'Data Structures & Algorithms',
      'DBMS',
      'Networks',
      'Machine Learning'
    ]
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Sri Chaitanya Techno School, Hosur',
    period: '2021 — 2023',
    score: '86%'
  }
]
