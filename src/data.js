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
    subtitle: '9 projects shipped',
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
    name: 'EMG Prosthetic Arm',
    year: '2026',
    repo: 'https://drive.google.com/file/d/1N9ibjSvJwfAW_AZYme2Qx6jobZ_x6sBs/view?usp=sharing',
    path: 'eeshwar-e / emg-prosthetic-arm',
    description: 'End-to-end biomedical system acquiring muscle signals via ESP32, classifying hand gestures with a CNN-LSTM network, and actuating a servo-driven prosthetic in real time.',
    tags: [
      { label: 'Python', style: 'green' },
      { label: 'CNN-LSTM', style: 'purple' },
      { label: 'ESP32', style: 'amber' },
      { label: 'Embedded', style: 'coral' },
      { label: 'Signal Processing', style: 'teal' }
    ]
  },
  {
    name: 'CWRU Bearing Fault Detection',
    year: '2025',
    path: 'eeshwar-e / bearing-fault-detection',
    description: 'Industrial ML pipeline for classifying bearing faults using Random Forest and SVM on CWRU vibration data, with PCA feature reduction and rigorous cross-validation.',
    tags: [
      { label: 'Python', style: 'green' },
      { label: 'Scikit-learn', style: 'purple' },
      { label: 'PCA', style: 'purple' },
      { label: 'Random Forest', style: 'purple' },
      { label: 'SVM', style: 'purple' }
    ]
  },
  {
    name: 'Resume Evaluation System',
    year: '2025',
    repo: 'https://github.com/Eeshwar-E/HR-ChatBot',
    path: 'eeshwar-e / HR-ChatBot',
    description: 'Automated HR tool that parses resumes from PDF to structured JSON, exposes a secure REST API backend, and delivers real-time scoring via a React dashboard.',
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
    description: 'Real-time relief operations platform with normalised database design, role-based access control, and React dashboards for monitoring resource distribution and volunteer allocation.',
    tags: [
      { label: 'React', style: 'blue' },
      { label: 'PostgreSQL', style: 'amber' },
      { label: 'RBAC', style: 'teal' },
      { label: 'SQL Optimisation', style: 'amber' }
    ]
  },
  {
    name: 'ZitHub — Custom VCS',
    year: '2024',
    repo: 'https://github.com/Eeshwar-E/ZitHub-VCS',
    path: 'eeshwar-e / ZitHub-VCS',
    description: 'Git-inspired version control system built from scratch using Merkle Trees, delta compression, and a Flask commit-graph dashboard for branch analysis and debugging.',
    tags: [
      { label: 'Python', style: 'green' },
      { label: 'Flask', style: 'blue' },
      { label: 'SQLite', style: 'amber' },
      { label: 'Merkle Trees', style: 'coral' },
      { label: 'Delta Compression', style: 'coral' }
    ]
  },
  {
    name: 'AI Contract Analyzer',
    year: '2025',
    repo: 'https://github.com/Eeshwar-E/ai-contract-analyzer',
    path: 'eeshwar-e / ai-contract-analyzer',
    description: 'AI-led contract analyzer that extracts clauses and surface-level risk metrics from agreements using Python-based NLP.',
    tags: [
      { label: 'Python', style: 'green' },
      { label: 'NLP', style: 'purple' },
      { label: 'AI', style: 'teal' }
    ]
  },
  {
    name: 'Document Reader',
    year: '2024',
    repo: 'https://github.com/Eeshwar-E/Document-Reader',
    path: 'eeshwar-e / Document-Reader',
    description: 'Document and image reader that extracts text from scanned pages and pictures, designed to simplify data capture from mixed media.',
    tags: [
      { label: 'Python', style: 'green' },
      { label: 'OCR', style: 'purple' },
      { label: 'Data Extraction', style: 'teal' }
    ]
  },
  {
    name: 'Finance Dashboard Demo',
    year: '2024',
    repo: 'https://github.com/Eeshwar-E/Finance_Dashboard_Demo',
    path: 'eeshwar-e / Finance_Dashboard_Demo',
    description: 'Interactive finance dashboard demo built with React and JavaScript to visualize portfolio metrics and market trends.',
    tags: [
      { label: 'React', style: 'blue' },
      { label: 'JavaScript', style: 'blue' },
      { label: 'UI', style: 'amber' }
    ]
  },
  {
    name: 'Travelling Salesman Problem',
    year: '2024',
    repo: 'https://github.com/Eeshwar-E/Travelling-Salesman-Problem',
    path: 'eeshwar-e / Travelling-Salesman-Problem',
    description: 'Python implementation of Travelling Salesman Problem algorithms and heuristics for route optimization and performance comparison.',
    tags: [
      { label: 'Python', style: 'green' },
      { label: 'Algorithms', style: 'purple' },
      { label: 'Optimization', style: 'teal' }
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
    items: ['React', 'Node.js', 'Express.js', 'Flask', 'HTML', 'CSS'],
    style: 'blue'
  },
  {
    label: 'Machine Learning',
    items: ['CNN-LSTM', 'Scikit-learn', 'PCA', 'Random Forest', 'SVM', 'Signal Processing'],
    style: 'purple'
  },
  {
    label: 'Databases & Tools',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Git', 'Linux'],
    style: 'amber'
  },
  {
    label: 'Core Concepts',
    items: ['DSA', 'OOP', 'Computer Architecture', 'OS', 'SDLC', 'Fault Analysis'],
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
    score: 'CGPA 7.93',
    courses: [
      'Computer Architecture',
      'Operating Systems',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Computer Networks',
      'Probability & Statistics',
      'Linear Algebra',
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
