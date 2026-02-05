import {
  agoraart,
  craigslistautofill,
  mindfulminute,
  pngtubergen,
  slofbot,
  survivalchess,
  tradebuddy,
  turnthetides,
  soulsurfer,
  agora,
  sfustormhacks,
  godotfirejam,
  bcit,
  emilycarr,
  nsss,
  barter,
  beantrack,
  cubeman,
  fridgeinfridgeout,
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

const education = [
  {
    title: "Computer Systems Technology (Diploma)",
    company_name: "British Columbia Institute of Technology, Burnaby, BC",
    icon: bcit,
    iconBg: "#000",
    date: "2024 - 2026",
    points: [
      "Set Representative for the BCIT Student Association (BCITSA)",
    ],
  },
  {
    title: "Experimental + 2D Animation (Bachelors)",
    company_name: "Emily Carr University of Art and Design, Vancouver, BC",
    icon: emilycarr,
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
    icon: nsss,
    iconBg: "#fff",
    date: "2012-2017",
    points: [
      "Honours Student",
      "Computer Programming Grade: 96%",
    ],
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Soul Surfer Software",
    icon: soulsurfer,
    iconBg: "#fff",
    date: "Sep. 2025 - Mar. 2026",
    points: [
      "Lead Developer for the Historical Data System that managed the continuous download and storage of 1-minute bar data for 7,000+ tickers from NYSE and NASDAQ",
      "Supervised a team of 7 engineers to assist in developing the Frontend dashboard for the Historical Data System using React Native (Expo).",
      "Engineered high-confidence trading strategies, including the 'Big Short' ensemble model and 'Small Hotties' module, by utilizing Jupyter Notebooks and Matplotlib to perform exploratory data analysis and visualize P&L curves for iterative optimization",
      "Modularized a monolithic codebase into independent, decoupled engines (Streamer, Signal, and Execution) to improve system maintainability and scalability.",
      "Architected an automated trading system using Python and the Interactive Brokers (TWS) API to execute real-time buy/sell orders based on custom algorithmic strategies.",
      "Helped Scott (CEO) setup the tools to create his home network into a data center.",
      "Skills Used: Python, React Native, Expo, Jupyter Notebooks, Matplotlib, Interactive Brokers API"
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Agora Art",
    icon: agora,
    iconBg: "#fff",
    date: "May 2025",
    points: [
      "Assisted in creating the Frontend for a data-centric “virtual mall” platform connecting thousands of independent sellers across Etsy, Shopify, and beyond.",
      "Scaled platform architecture using React, Next.js, GraphQL, and Stripe to help users to explore styles across multiple marketplaces with click-through to original product pages, centralizing the festival fashion ecosystem.",
      "Integrated Stripe Connect, TaxJar, and 2Ship for seamless checkout, tax automation, and shipping workflows",
      "References: Taylor Aucoin (CEO, CTO) - https://www.linkedin.com/in/taylor-aucoin",
      "Skills Used: React, Next.js, GraphQL, Stripe, Vercel, AWS (S3, EC2), NGINX, PostgreSQL"
    ],
  },
  {
    title: "Hackathon Winner (Finalists / Best Game)",
    company_name: "SFU Stormhacks 2025",
    icon: sfustormhacks,
    iconBg: "#fff",
    date: "May 2025",
    points: [
      "1st Place Finalist and Best Game Award out of 770+ participants in SFU Stormhacks 2025 by developing 'Survival Chess', a strategy based chess game.",
      "Dev Post Link: https://devpost.com/software/survivalchess",
      "Skills Used: Node.js, TypeScript, PixiJS, Vite"
    ],
  },
  {
    title: "Hackathon Winner (Third Place $318)",
    company_name: "Godot Fire Jam",
    icon: godotfirejam,
    iconBg: "#fff",
    date: "Nov. 2021",
    points: [
      "3rd Place Winner out of 25+ participants in the Godot Fire Charity Jam by developing  'Mayhem', a 2D action-platformer game using Godot Engine.",
      "Worked in a team of 4 to develop 'Mayhem', a 2D action-platformer game using Godot Engine, within a 7-day timeframe for the Godot Fire Charity Jam.",
      "Itch.io Link: https://itch.io/jam/godot-fire-charity-jam-1/rate/1259174",
      "Skills Used: Godot Engine, GDScript, Photoshop, Bosca Ceoil"
    ],
  }
];

const projects = [
  {
    id: "tradebuddy",
    name: "TradeBuddy 📈",
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
    image: tradebuddy,
    source_code_link: null,
    live_project_link: "https://soulsurfer.ca",
  },
  {
    id: "turnthetides",
    name: "TurnTheTides 🌊",
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
    image: turnthetides,
    source_code_link: "https://github.com/TP-3T/4957-Tides",
    live_project_link: "https://store.steampowered.com/search?term=turn+the+tides",
  },
  {
    id: "fridgeinfridgeout",
    name: "FridgeInFridgeOut 🍎",
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
    image: fridgeinfridgeout,
    source_code_link: "https://github.com/sireoh/FridgeInFridgeOut",
    live_project_link: "https://github.com/sireoh/FridgeInFridgeOut",
  },
  {
    id: "agoraartfestival",
    name: "Agora Art Festival 💃",
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
    image: agoraart,
    source_code_link: null,
    live_project_link: "https://www.agora.art/",
  },
  {
    id: "barter",
    name: "BARTER 💰",
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
    image: barter,
    source_code_link: "https://github.com/sireoh/BARTER",
    live_project_link: "https://github.com/sireoh/BARTER",
  },
  {
    id: "mindfulminute",
    name: "Mindful Minute 🧘‍♂️",
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
    image: mindfulminute,
    source_code_link: "https://github.com/sireoh/MindfulMinute",
    live_project_link: "https://github.com/sireoh/MindfulMinute",
  },
  {
    id: "beantrack",
    name: "BeanTrack 🫘",
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
    image: beantrack,
    source_code_link: "https://github.com/sireoh/beantrack",
    live_project_link: "https://beantrack.vincef.cc/",
  },
  {
    id: "craigslistautofill",
    name: "Craigslist Autofill ☮️",
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
    image: craigslistautofill,
    source_code_link: "https://github.com/sireoh/craigslist-autofill",
    live_project_link: "https://addons.mozilla.org/en-US/firefox/addon/craigslist-autofill/",
  },
  {
    id: "survivalchess",
    name: "Survival Chess ♟️",
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
    image: survivalchess,
    source_code_link: "https://github.com/jpg157/Stormhacks_2025_Survival_Chess",
    live_project_link: "https://devpost.com/software/survivalchess",
  },
  {
    id: "slofbot",
    name: "slofbot 🦥",
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
    image: slofbot,
    source_code_link: "https://github.com/sireoh/slofbot",
    live_project_link: "https://github.com/sireoh/slofbot",
  },
  {
    id: "cubeman",
    name: "cubeman 🧊",
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
    image: cubeman,
    source_code_link: "https://github.com/sireoh/cubeman",
    live_project_link: "https://sireoh.itch.io/cubeman",
  },
  {
    id: "pngtubergenerator",
    name: "PNGTuber Generator 🖼️",
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
    image: pngtubergen,
    source_code_link: "https://github.com/sireoh/pngtuber-gen",
    live_project_link: "https://sireoh.itch.io/pnggen",
  }
];

export {
  experiences,
  projects,
  education,
};
