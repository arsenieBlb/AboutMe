export const portfolioIllustrations = {
  emerald: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
    <rect x="10" y="14" width="44" height="34" rx="4" stroke="rgba(52,211,153,.45)" stroke-width="2"/>
    <rect x="15" y="20" width="14" height="8" rx="2" fill="rgba(52,211,153,.65)"/>
    <rect x="33" y="20" width="16" height="3" rx="1.5" fill="rgba(52,211,153,.25)"/>
    <rect x="15" y="32" width="34" height="8" rx="2" fill="rgba(52,211,153,.2)"/>
  </svg>`,
  cyan: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
    <rect x="10" y="12" width="44" height="30" rx="4" stroke="rgba(34,211,238,.45)" stroke-width="2"/>
    <path d="M18 35 L26 27 L33 31 L45 20" stroke="rgba(34,211,238,.9)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="18" cy="35" r="2.5" fill="#22d3ee"/>
    <circle cx="45" cy="20" r="2.5" fill="#22d3ee"/>
    <rect x="24" y="46" width="16" height="4" rx="2" fill="rgba(34,211,238,.2)"/>
  </svg>`,
  amber: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
    <rect x="10" y="38" width="44" height="12" rx="2" stroke="rgba(251,191,36,.32)" stroke-width="2"/>
    <path d="M28 38 C28 30 32 23 39 19 C42 17 45 18 46 21 C47 24 44 26 41 27 C44 27 47 29 47 33 C47 36 44 38 40 38 Z" fill="rgba(251,191,36,.85)"/>
    <circle cx="41" cy="22" r="1.8" fill="rgba(8,9,26,.8)"/>
  </svg>`,
  rose: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
    <circle cx="32" cy="12" r="6" fill="rgba(251,113,133,.8)"/>
    <circle cx="12" cy="32" r="6" fill="rgba(251,113,133,.55)"/>
    <circle cx="52" cy="32" r="6" fill="rgba(251,113,133,.55)"/>
    <circle cx="32" cy="52" r="6" fill="rgba(251,113,133,.7)"/>
    <path d="M32 12 L12 32 L32 52 L52 32 Z" stroke="rgba(251,113,133,.35)" stroke-width="2"/>
    <path d="M12 32 H52 M32 12 V52" stroke="rgba(251,113,133,.15)" stroke-width="1.5" stroke-dasharray="4 4"/>
  </svg>`,
  violet: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
    <rect x="10" y="12" width="44" height="40" rx="6" stroke="rgba(167,139,250,.4)" stroke-width="2"/>
    <circle cx="32" cy="32" r="12" stroke="rgba(167,139,250,.45)" stroke-width="2"/>
    <circle cx="32" cy="32" r="5" fill="rgba(167,139,250,.75)"/>
    <path d="M32 20 V16 M44 32 H48 M32 44 V48 M20 32 H16" stroke="rgba(167,139,250,.35)" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  teal: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
    <rect x="10" y="10" width="44" height="28" rx="4" stroke="rgba(45,212,191,.42)" stroke-width="2"/>
    <rect x="15" y="17" width="10" height="6" rx="2" fill="rgba(45,212,191,.55)"/>
    <rect x="29" y="18" width="18" height="3" rx="1.5" fill="rgba(45,212,191,.22)"/>
    <path d="M8 42 H56 V48 C56 50 54 52 52 52 H12 C10 52 8 50 8 48 Z" fill="rgba(45,212,191,.12)" stroke="rgba(45,212,191,.3)" stroke-width="2"/>
  </svg>`,
};

export const portfolioProjects = [
  {
    num: '01',
    abbr: 'IMS',
    year: '2024',
    color: 'emerald',
    title: 'Inventory Management System',
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
    description:
      'Full-stack enterprise app for real-time stock tracking, automated reorder alerts, and multi-warehouse coordination. Built during internship at Teknovate.',
  },
  {
    num: '02',
    abbr: 'CRM',
    year: '2024',
    color: 'cyan',
    title: 'CRM Dashboard',
    tags: ['React', 'TypeScript', 'Node.js'],
    description:
      'Custom CRM for the American Chamber of Commerce - data visualisation, contact management, and outreach pipeline tracking.',
  },
  {
    num: '03',
    abbr: 'CEA',
    year: '2023',
    color: 'amber',
    title: 'Chess Engine Analyser',
    tags: ['Python', 'FastAPI', 'Algorithms'],
    description:
      'REST API wrapping a custom minimax engine with alpha-beta pruning. Exposes position evaluation and best-move prediction endpoints.',
  },
  {
    num: '04',
    abbr: 'NPS',
    year: '2023',
    color: 'rose',
    title: 'Network Packet Simulator',
    tags: ['C++', 'Systems', 'Networking'],
    description:
      'Low-level simulator modelling TCP/UDP routing, congestion control, and queue management across virtual network topologies.',
  },
  {
    num: '05',
    abbr: 'PO',
    year: '2024',
    color: 'violet',
    title: 'Photo Organiser',
    tags: ['JavaScript', 'Canvas API'],
    description:
      'Browser-side image tagging and gallery builder. Processes EXIF metadata, generates albums, and exports a static HTML site - no backend.',
  },
  {
    num: '06',
    abbr: 'IAT',
    year: '2024',
    color: 'teal',
    title: 'IT Asset Tracker',
    tags: ['C#', '.NET', 'SQL'],
    description:
      'Desktop app for hardware lifecycle management - tracks assignments, maintenance schedules, and generates inventory reports.',
  },
];

export const portfolioAccentMap = {
  emerald: '#34d399',
  cyan: '#22d3ee',
  amber: '#fbbf24',
  rose: '#fb7185',
  violet: '#a78bfa',
  teal: '#2dd4bf',
};

export const portfolioTagBorderMap = {
  emerald: 'rgba(52,211,153,.3)',
  cyan: 'rgba(34,211,238,.3)',
  amber: 'rgba(251,191,36,.3)',
  rose: 'rgba(251,113,133,.3)',
  violet: 'rgba(167,139,250,.3)',
  teal: 'rgba(45,212,191,.3)',
};
