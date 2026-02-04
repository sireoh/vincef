import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  reactjs,
  tailwind,
  postgresql,
  otu,
  rhhs,
  wonderland,
  mackenziehealth,
  staples,
  aws,
  python,
  cplusplus,
  typescript,
  axelotlanding,
  netdashlanding,
  securebankdashboard,
  sunnifyimage,
  knifethrowimage,
  powershell,
  photoshop,
  premiere,
  cinema4d,
  financialflowimage,
  mongodb,
  ibm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Computer Systems Technology (Diploma)",
    company_name: "British Columbia Institute of Technology, Burnaby, BC",
    icon: otu,
    iconBg: "#fff",
    date: "2024 - 2026",
    points: [
      "Set Representative for the BCIT Student Association (BCITSA)",
    ],
  },
  {
    title: "Experimental + 2D Animation (Bachelors)",
    company_name: "Emily Carr University of Art and Design, Vancouver, BC",
    icon: otu,
    iconBg: "#fff",
    date: "2017 - 2022",
    points: [
      "President of Animation Club",
      "Lead a team of 5 members as the Lead Director of my 4th year film 'Mushman Tuk'."
    ],
  },
  {
    title: "High School",
    company_name: "North Surrey Secondary School, Surrey, BC",
    icon: rhhs,
    iconBg: "#fff",
    date: "2012-2017",
    points: [
      "Honours Student",
      "Computer Programming Grade: 96%",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  }
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Soul Surfers Software",
    icon: ibm,
    iconBg: "#fff",
    date: "Sep. 2025 - Mar. 2026",
    points: [
      "Full-Stack AI Engineering • watsonx Workshop 🤖",
    ],
  },
  {
    title: "IT Technician",
    company_name: "Canada's Wonderland",
    icon: wonderland,
    iconBg: "#fff",
    date: "Jun. 2023 - Jan. 2026",
    points: [
      "Provisioned Windows PCs with MDT, and deployed scripting via PowerShell and ConnectWise.",
      "Managed AD accounts to propagate ACLs and unified access across in-house apps, Exchange, and SharePoint.",
      "Configured Cisco CUCM, Unity, and Finesse for stable call routing and voicemail services.",
      "Handled switch patching and VLAN/routing via PuTTY & SecureCRT, ensuring stable network performance.",
      "Deployed Oracle POS/KDS/Debit solutions (EMC, Simphony), tracking updates in Jira & Confluence.",
    ],
  },
  {
    title: "System Support Specialist",
    company_name: "Mackenzie Health",
    icon: mackenziehealth,
    iconBg: "#fff",
    date: "Jan. 2023 - Aug. 2023",
    points: [
      "Overhauled 400+ Surface tablets to bedside iPads, deploying the in-house 'Get Well Soon' app with Intune to hospital systems.",
      "Developed and refined an admin portal for managing app services, user roles, and subscription expirations.",
      "Utilized Jamf Pro for MDM, securely deploying iPads/iPhones across clinical departments.",
      "Implemented Vocera VOIP on iPhones, enabling real-time communication among nurses and ER staff.",
      "Performed in-room checks, resolved device issues, and collaborated with vendors on bug logs and system updates.",
    ],
  },
  {
    title: "Tech Sales Associate",
    company_name: "Staples Canada (Co-op)",
    icon: staples,
    iconBg: "#1294C8",
    date: "Sep. 2020 - Feb. 2021",
    points: [
      "Provided specialized support for Windows, Mac, and Linux, performing on-site installations, repairs, and optimizations.",
      "Streamlined inventory processes by handling SKUs and POs, maintaining a well-organized sales floor.",
      "Maintained accurate sales and inventory data in IBM AS/400, improving workflows and operational efficiency.",
      "Resolved complex technical inquiries, delivering tailored solutions that ensured high customer satisfaction.",
      "Facilitated e-commerce transactions, merging in-store and online channels.",
    ],
  },
];

const projects = [
  {
    name: "Axelot ✍️",
    description:
      "Axelot is a real-time collaborative writing and knowledge workspace built with Next.js 16, TypeScript, Firebase, TipTap 3, and Yjs. It supports multi-user editing with presence cursors, CRDT-based conflict-free sync over WebRTC, and AI-assisted editing via OpenRouter-backed Next.js API routes. Features secure auth with NextAuth v5 (Google/GitHub OAuth, email/password with bcrypt), Firestore-backed storage with Firebase custom tokens, a Vercel cron-powered trending algorithm, and production deployment via multi-stage Docker pipeline.",
    tags: [
      {
        name: "Next.js 16",
        color: "blue-text-gradient",
      },
      {
        name: "TipTap 3 / Yjs",
        color: "green-text-gradient",
      },
      {
        name: "WebRTC",
        color: "pink-text-gradient",
      },
      {
        name: "OpenRouter AI",
        color: "blue-text-gradient",
      },
    ],
    image: axelotlanding,
    source_code_link: "https://github.com/royce-mathew/axelot",
    live_project_link: "https://www.axelot.io",
  },
  {
    name: "Netdash (Networking Toolbox) 🌐",
    description:
      "Netdash is a cross-platform Electron desktop app (macOS, Windows, Linux) with Homebrew distribution, featuring Firebase Auth with Google OAuth and real-time Firestore sync. It includes 15+ networking tools for subnetting, VLSM, IP conflict detection, and multi-vendor configuration generation. Built with RTT measurement via Performance API, TCP port scanning, DNS-over-HTTPS with TTL-aware caching, and RFC-compliant IPv4/IPv6 algorithms with WCAG2.2 accessibility compliance.",
    tags: [
      {
        name: "Electron",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "DNS-over-HTTPS",
        color: "pink-text-gradient",
      },
      {
        name: "WCAG2.2",
        color: "blue-text-gradient",
      },
    ],
    image: netdashlanding,
    source_code_link: "https://github.com/sunnypatell/netdash-toolkit/",
    live_project_link: "https://netdash-toolkit.vercel.app/",
  },
  {
    name: "SecureBank 🏦",
    description:
      "SecureBank is a deliberately vulnerable banking simulation built for Capture The Flag (CTF) training, focused on SQL injection and privilege escalation. It features exploit paths including raw query interpolation, single/double URL encoding, and a hidden admin portal to teach secure coding by example. Core features include transaction search/filter, a feedback system, and an admin dashboard with live DB console and security logs. Backed by a normalized SQLite schema with session handling via cookie-signature, and dockerized with structured challenge documentation.",
    tags: [
      {
        name: "CTF",
        color: "blue-text-gradient",
      },
      {
        name: "SQLi/XSS",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: securebankdashboard,
    source_code_link: "https://github.com/sunnypatell/securebank-ctf",
    live_project_link: "https://github.com/sunnypatell/securebank-ctf",
  },
  {
    name: "Sunnify (Spotify Downloader) 🎵",
    description:
      "Sunnify is a Spotify downloader that reverse-engineers embed pages to extract track metadata by parsing protected JSON states without authentication. It features a cross-platform PyQt5 desktop client (macOS, Windows, Linux) with thread-safe UI updates and supports playlists with 1000+ tracks via Spotify's internal spclient API. Includes retry logic with exponential backoff for rate limiting, cross-platform FFmpeg detection, 43 pytest unit tests with GitHub Actions CI/CD, and ships as a Homebrew Cask.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyQt5",
        color: "green-text-gradient",
      },
      {
        name: "yt-dlp",
        color: "pink-text-gradient",
      },
      {
        name: "Homebrew",
        color: "blue-text-gradient",
      },
    ],
    image: sunnifyimage,
    source_code_link: "https://github.com/sunnypatell/sunnify-spotify-downloader",
    live_project_link: "https://sunnify-spotify-downloader.vercel.app/",
  },
  {
    name: "FinancialFlow 💸",
    description:
      "Comprehensive personal finance management application built with Next.js and Typescript. It empowers users to take control of their financial health through intuitive tracking, insightful analytics, and personalized recommendations.",
    tags: [
      {
        name: "React-native",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
    ],
    image: financialflowimage,
    source_code_link: "https://github.com/sunnypatell/financialflow",
    live_project_link: "https://financial-flow.vercel.app/",
  },
  {
    name: "KnifeThrow 🎯",
    description:
      "KnifeThrow is a Java Swing-based 2D mini-game, packed by maven with over 5000 lines of code. It includes a menu, game-over screens, sound effects, and custom sprites. Players unlock different knives with varied abilities in a dedicated knife shop. The game features improved collision systems, animations, and particle effects for an immersive experience.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
      {
        name: "maven",
        color: "pink-text-gradient",
      },
      {
        name: "arcadegame",
        color: "green-text-gradient",
      },
    ],
    image: knifethrowimage,
    source_code_link: "https://github.com/sunnypatell/KnifeThrow",
    live_project_link: "https://github.com/sunnypatell/KnifeThrow",
  }
];

export {
  services,
  technologies,
  experiences,
  projects,
  education,
};
