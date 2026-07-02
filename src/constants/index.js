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
      "Helped CEO Scott M. setup the tools to create his home network into a data center.",
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
      "Developed as proprietary software for Soul Surfer Software, TradeBuddy is an intelligent algorithmic 'black box' for auto-trading on the NASDAQ and NYSE. As Lead Developer for the Historical Data System, I managed the continuous ingestion of 1-minute bar data for 7,000+ tickers. I engineered high-confidence strategies, including the 'Big Short' ensemble model, using Python, Jupyter Notebooks, and Matplotlib to optimize P&L curves. The system leverages the Interactive Brokers (TWS) API to execute real-time orders based on both historical analysis and live market data.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Interactive Brokers API",
        color: "green-text-gradient",
      },
      {
        name: "Algorithmic Trading",
        color: "pink-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "blue-text-gradient",
      },
      {
        name: "Jupyter Notebooks",
        color: "green-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "pink-text-gradient",
      },
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
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
      "TurnTheTides is an interactive strategy game and climate change education tool developed by a 22-person multidisciplinary team at BCIT. Operating like a professional software firm, I contributed to a complex ecosystem featuring Simulation, Scenario, and Social modes. The project demonstrates how economic and policy decisions impact global ecosystems through AI-driven disaster prediction and real-world simulations. My work involved high-level collaboration across Core Logic and DevOps teams to deliver a published product that translates climate data into engaging gameplay.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
      {
        name: "Game Development",
        color: "blue-text-gradient",
      }
    ],
    image: turnthetides,
    source_code_link: "https://github.com/TP-3T/4957-Tides",
    live_project_link: "https://store.steampowered.com/search?term=turn+the+tides",
  },
  {
    id: "fridgeinfridgeout",
    name: "FridgeInFridgeOut 🍎",
    description:
      "FridgeInFridgeOut is a React Native application designed to eliminate food waste through intelligent inventory management. The app serves as a centralized 'online food bank,' utilizing AI and OCR to instantly catalog items from the pantry, fridge, and freezer. A core feature is the AI-powered recipe generator, which applies the 'First In First Out' rule by prioritizing ingredients nearing their expiration. By bridging the gap between grocery shopping and meal preparation, the app provides a seamless solution for tracking scattered food items and reducing household waste.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "OCR",
        color: "pink-text-gradient",
      },
      {
        name: "Food Waste Reduction",
        color: "blue-text-gradient",
      },
      {
        name: "Sustainability",
        color: "green-text-gradient",
      },
      {
        name: "Mobile App Development",
        color: "pink-text-gradient",
      }
    ],
    image: fridgeinfridgeout,
    source_code_link: "https://github.com/sireoh/FridgeInFridgeOut",
    live_project_link: "https://github.com/sireoh/FridgeInFridgeOut",
  },
  {
    id: "agoraartfestival",
    name: "Agora Art Festival 💃",
    description:
      "For the Agora Art Festival marketplace, I engineered a global shopping cart architecture using Zustand for lightweight, high-performance state management. I developed robust API consumption layers to sync the React frontend with a PostgreSQL backend, ensuring real-time inventory accuracy across a 'virtual mall' with thousands of independent sellers. My focus was on the 'plumbing' of the e-commerce experience—building scalable components for cart persistence, multi-currency support, and seamless click-through routing to maintain user sessions in a multi-vendor environment",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe",
        color: "blue-text-gradient",
      },
      {
        name: "Vercel",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      }
    ],
    image: agoraart,
    source_code_link: null,
    live_project_link: "https://www.agora.art/",
  },
  {
    id: "barter",
    name: "BARTER 💰",
    description:
      "BARTER is a currency-free marketplace designed to facilitate the exchange of skills and services in a peer-to-peer economy. The platform features personalized portfolios that allow users to showcase their unique traits and expertise, enabling others to make informed 'hiring' decisions. By connecting users through an online marketplace and integrated email communication, BARTER streamlines the process of trading services without financial barriers. It focuses on efficiency and transparency, ensuring both parties know exactly what value is being exchanged in every transaction.",
    tags: [
      {
        name: "EJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      }
    ],
    image: barter,
    source_code_link: "https://github.com/sireoh/BARTER",
    live_project_link: "https://github.com/sireoh/BARTER",
  },
  {
    id: "mindfulminute",
    name: "Mindful Minute 🧘‍♂️",
    description:
      "Developed as a BCIT term project in a team of four, Mindful Minute is a comprehensive mood and journal entry tracker. The application allows users to monitor their mental well-being by visualizing emotional statistics across daily, weekly, and monthly views. I utilized Firebase for real-time data storage and user authentication, while building the frontend with raw JavaScript, HTML, and CSS. To ensure a responsive and polished user interface, I implemented Bootstrap for styling. The project highlights my ability to collaborate in a team environment to deliver a data-driven personal wellness tool.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "red-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Mental Health",
        color: "green-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "blue-text-gradient",
      },
      {
        name: "Team Project",
        color: "green-text-gradient",
      }
    ],
    image: mindfulminute,
    source_code_link: "https://github.com/sireoh/MindfulMinute",
    live_project_link: "https://github.com/sireoh/MindfulMinute",
  },
  {
    id: "beantrack",
    name: "BeanTrack 🫘",
    description:
      "BeanTrack is a full-stack media tracking solution hosted on a personal Ubuntu home server. Built with a FastAPI backend and a Next.js frontend, it provides a tailored interface for managing TV and movie watchlists. The platform integrates the OMDb and TVmaze APIs to fetch real-time media data, which is persisted in a MongoDB database. I managed the entire deployment pipeline, using Nginx Proxy Manager and Cloudflare to securely expose the service to the internet. This project was born from a need for a minimalist, self-hosted alternative to mainstream tracking apps.",
    tags: [
      {
        name: "FastAPI",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Nginx",
        color: "blue-text-gradient",
      },
      {
        name: "Cloudflare",
        color: "green-text-gradient",
      },
      {
        name: "Media Tracking",
        color: "pink-text-gradient",
      },
      {
        name: "Home Server",
        color: "blue-text-gradient",
      },
      {
        name: "API Integration",
        color: "green-text-gradient",
      },
      {
        name: "Full-Stack Development",
        color: "pink-text-gradient",
      },
      {
        name: "Self-Hosted",
        color: "blue-text-gradient",
      },
      {
        name: "Personal Project",
        color: "green-text-gradient",
      }
    ],
    image: beantrack,
    source_code_link: "https://github.com/sireoh/beantrack",
    live_project_link: "https://github.com/sireoh/beantrack",
  },
  {
    id: "craigslistautofill",
    name: "Craigslist Autofill ☮️",
    description:
      "This automation tool streamlines the creation of rental listings using a combination of web scraping and LLMs. I developed a Firefox extension that utilizes DOM manipulation to autofill Craigslist forms directly. The backend, built with FastAPI and Python, leverages Beautiful Soup for scraping and OpenAI/DeepSeek models to summarize and optimize listing text for maximum engagement. By bridging browser-based automation with machine learning, the tool significantly reduces the manual overhead of managing property listings for my family's rental suites.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Web Scraping",
        color: "pink-text-gradient",
      },
      {
        name: "LLMs",
        color: "blue-text-gradient",
      },
      {
        name: "Browser Automation",
        color: "green-text-gradient",
      },
      {
        name: "Firefox Extension",
        color: "pink-text-gradient",
      },
      {
        name: "Productivity Tool",
        color: "green-text-gradient",
      },
      {
        name: "AI Integration",
        color: "blue-text-gradient",
      }
    ],
    image: craigslistautofill,
    source_code_link: "https://github.com/sireoh/craigslist-autofill",
    live_project_link: "https://addons.mozilla.org/en-US/firefox/addon/craigslist-autofill/",
  },
  {
    id: "survivalchess",
    name: "Survival Chess ♟️",
    description:
      "Winner of 'Best Game' and a 'Finalist' at SFU Stormhacks, Survival Chess is a fast-paced strategy game developed in just 24 hours. Built with TypeScript and rendered via PixiJS, the game challenges players to save pieces from environmental hazards across infinite rounds. I worked within a team of four to implement the core logic and real-time rendering, using Node.js and Vite for the development environment. The project combined the tactical depth of Chess with the urgency of a survival game, requiring highly optimized state management to handle increasing difficulty.",
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
      "slofbot is a general-purpose Discord bot developed in Python using the discord.py library, designed to enhance server engagement and utility. I integrated the Twitch API to provide real-time streaming updates and cross-platform connectivity for users. Beyond social features, I implemented custom interactive commands, such as a /sudoku generator that dynamically creates logic puzzles for community members. The project demonstrates my ability to work with third-party APIs and asynchronous programming to create responsive, multi-functional tools for digital communities.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "discord.py",
        color: "green-text-gradient",
      },
      {
        name: "Twitch API",
        color: "pink-text-gradient",
      },
      {
        name: "Bot Development",
        color: "blue-text-gradient",
      },
      {
        name: "Community Engagement",
        color: "green-text-gradient",
      },
      {
        name: "Interactive Commands",
        color: "pink-text-gradient",
      },
      {
        name: "Personal Project",
        color: "blue-text-gradient",
      },
      {
        name: "Self-Hosted",
        color: "green-text-gradient",
      }
    ],
    image: slofbot,
    source_code_link: "https://github.com/sireoh/slofbot",
    live_project_link: "https://github.com/sireoh/slofbot",
  },
  {
    id: "cubeman",
    name: "cubeman 🧊",
    description:
      "cubeman is a story-based action-adventure RPG that showcases a complete engine migration from GameMaker Studio 1 to the Godot Engine. Using GDScript, I refactored the core mechanics and gameplay logic to leverage Godot’s scene-based architecture. I handled the full creative pipeline, including designing custom pixel art in Aseprite and integrating audio from Freesound. To ensure accessibility, I implemented a versatile input system supporting both keyboard and Xbox controller configurations. The project demonstrates my adaptability in learning new engines and managing the full game development lifecycle.",
    tags: [
      {
        name: "Godot Engine",
        color: "blue-text-gradient",
      },
      {
        name: "GDScript",
        color: "green-text-gradient",
      },
      {
        name: "Pixel Art",
        color: "pink-text-gradient",
      },
      {
        name: "Personal Project",
        color: "blue-text-gradient",
      },
      {
        name: "Game Development",
        color: "green-text-gradient",
      },
      {
        name: "RPG",
        color: "pink-text-gradient",
      },
      {
        name: "Controller Support",
        color: "blue-text-gradient",
      }
    ],
    image: cubeman,
    source_code_link: "https://github.com/sireoh/cubeman",
    live_project_link: "https://sireoh.itch.io/cubeman",
  },
  {
    id: "pngtubergenerator",
    name: "PNGTuber Generator 🖼️",
    description:
      "Developed during the COVID-19 era, this vanilla JavaScript tool automates CSS generation for virtual personas used in OBS. Hosted on itch.io, the generator became a staple for the streaming community, amassing over 62,000 views and 26,000 browser plays. I maintained the project for over two years, iteratively updating features to support the evolving needs of Twitch creators. The tool's success lies in its ability to simplify complex visual layering into a user-friendly interface, allowing streamers to create reactive avatars without deep technical knowledge.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Web Development",
        color: "pink-text-gradient",
      },
      {
        name: "Streaming Tools",
        color: "blue-text-gradient",
      },
      {
        name: "OBS",
        color: "green-text-gradient",
      },
      {
        name: "Twitch",
        color: "pink-text-gradient",
      },
      {
        name: "Personal Project",
        color: "blue-text-gradient",
      },
      {
        name: "Open Source",
        color: "green-text-gradient",
      },
      {
        name: "Community Engagement",
        color: "pink-text-gradient",
      },
      {
        name: "Iterative Development",
        color: "blue-text-gradient",
      }
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
