import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Tooltip } from "react-tooltip";

import {
  SiPython, SiJavascript, SiTypescript, SiFigma,
  SiKotlin, SiGo, SiC, SiHtml5, SiLua, SiAndroid,
  SiGnubash, SiCsswizardry, SiEjs, SiCplusplus, SiAngular,
  SiBootstrap, SiTailwindcss, SiFirebase, SiGithub,
  SiLinux, SiNodedotjs, SiDocker, SiTailscale, SiCloudflare,
  SiDotnet, SiSvelte, SiNextdotjs, SiDjango, SiOllama,
  SiVite, SiPostgresql, SiFastapi, SiNestjs, SiRedux, SiJetbrains,
  SiNginx, SiHuggingface, SiOracle, SiMongodb, SiUnity, SiEclipseide,
  SiSlack, SiTrello, SiDiscord, SiAdobe,
  SiClickup, SiJira, SiNotion
} from "react-icons/si";

import {
  FaJava
} from "react-icons/fa";

import {
  TbBrandCSharp, TbSql
} from "react-icons/tb";

import { VscAzure, VscVscode } from "react-icons/vsc";

import { BsMicrosoftTeams } from "react-icons/bs";

const svgStyle = {
  "size": 64
}

const programming_languages = [
  { id: "python", name: "Python", icon: <SiPython size={svgStyle.size} /> },
  { id: "java", name: "Java", icon: <FaJava size={svgStyle.size} /> },
  { id: "javascript", name: "JavaScript", icon: <SiJavascript size={svgStyle.size} /> },
  { id: "typescript", name: "TypeScript", icon: <SiTypescript size={svgStyle.size} /> },
  { id: "c", name: "C", icon: <SiC size={svgStyle.size} /> },
  { id: "csharp", name: "C#", icon: <TbBrandCSharp size={svgStyle.size} /> },
  { id: "kotlin", name: "Kotlin", icon: <SiKotlin size={svgStyle.size} /> },
  { id: "go", name: "Go", icon: <SiGo size={svgStyle.size} /> },
  { id: "sql", name: "SQL", icon: <TbSql size={svgStyle.size} /> },
  { id: "shell_scripting_bash", name: "Shell Scripting (Bash)", icon: <SiGnubash size={svgStyle.size} /> },
  { id: "html", name: "HTML", icon: <SiHtml5 size={svgStyle.size} /> },
  { id: "css", name: "CSS", icon: <SiCsswizardry size={svgStyle.size} /> },
  { id: "ejs", name: "EJS", icon: <SiEjs size={svgStyle.size} /> },
  { id: "lua", name: "Lua", icon: <SiLua size={svgStyle.size} /> },
  { id: "cplusplus", name: "C++", icon: <SiCplusplus size={svgStyle.size} /> },
];

const tools_and_frameworks = [
  // Web & Frontend
  { id: "nextjs", name: "NextJS", icon: <SiNextdotjs size={svgStyle.size} /> },
  { id: "svelte", name: "Svelte", icon: <SiSvelte size={svgStyle.size} /> },
  { id: "tailwind", name: "Tailwind", icon: <SiTailwindcss size={svgStyle.size} /> },
  { id: "bootstrap", name: "Bootstrap", icon: <SiBootstrap size={svgStyle.size} /> },
  { id: "redux", name: "Redux", icon: <SiRedux size={svgStyle.size} /> },
  { id: "vite", name: "Vite", icon: <SiVite size={svgStyle.size} /> },
  { id: "angular", name: "Angular", icon: <SiAngular size={svgStyle.size} /> },

  // Backend & APIs
  { id: "nodejs", name: "NodeJS", icon: <SiNodedotjs size={svgStyle.size} /> },
  { id: "dotnet", name: ".NET", icon: <SiDotnet size={svgStyle.size} /> },
  { id: "django", name: "Django", icon: <SiDjango size={svgStyle.size} /> },
  { id: "fastapi", name: "FastAPI", icon: <SiFastapi size={svgStyle.size} /> },
  { id: "nestjs", name: "NestJS", icon: <SiNestjs size={svgStyle.size} /> },

  // Infrastructure & Self-Hosting
  { id: "docker", name: "Docker", icon: <SiDocker size={svgStyle.size} /> },
  { id: "linux", name: "Linux", icon: <SiLinux size={svgStyle.size} /> },
  { id: "nginx", name: "Nginx", icon: <SiNginx size={svgStyle.size} /> },
  { id: "tailscale", name: "Tailscale", icon: <SiTailscale size={svgStyle.size} /> },
  { id: "cloudflare", name: "Cloudflare", icon: <SiCloudflare size={svgStyle.size} /> },
  { id: "azure", name: "Azure", icon: <VscAzure size={svgStyle.size} /> },

  // Databases & Cloud
  { id: "postgresql", name: "PostgreSQL", icon: <SiPostgresql size={svgStyle.size} /> },
  { id: "firebase", name: "Firebase", icon: <SiFirebase size={svgStyle.size} /> },
  { id: "oracle_db", name: "Oracle DB", icon: <SiOracle size={svgStyle.size} /> },
  { id: "mongodb", name: "MongoDB", icon: <SiMongodb size={svgStyle.size} /> },

  // AI & ML
  { id: "huggingface", name: "Huggingface", icon: <SiHuggingface size={svgStyle.size} /> },
  { id: "ollama", name: "Ollama", icon: <SiOllama size={svgStyle.size} /> },
];

const other = [
  { id: "slack", name: "Slack", icon: <SiSlack size={svgStyle.size} /> },
  { id: "trello", name: "Trello", icon: <SiTrello size={svgStyle.size} /> },
  { id: "discord", name: "Discord", icon: <SiDiscord size={svgStyle.size} /> },
  { id: "teams", name: "Microsoft Teams", icon: <BsMicrosoftTeams size={svgStyle.size} /> },
  { id: "clickup", name: "ClickUp", icon: <SiClickup size={svgStyle.size} /> },
  { id: "jira", name: "Jira", icon: <SiJira size={svgStyle.size} /> },
  { id: "notion", name: "Notion", icon: <SiNotion size={svgStyle.size} /> },
  { id: "figma", name: "Figma", icon: <SiFigma size={svgStyle.size} /> },
  { id: "git_github", name: "Git & GitHub", icon: <SiGithub size={svgStyle.size} /> },
  { id: "android", name: "Android Development", icon: <SiAndroid size={svgStyle.size} /> },
  { id: "unity", name: "Unity", icon: <SiUnity size={svgStyle.size} /> },
  { id: "eclipse_ide", name: "Eclipse IDE", icon: <SiEclipseide size={svgStyle.size} /> },
  { id: "vscode", name: "VS Code", icon: <VscVscode size={svgStyle.size} /> },
  { id: "jetbrains", name: "JetBrains", icon: <SiJetbrains size={svgStyle.size} /> },
  { id: "adobe", name: "Adobe", icon: <SiAdobe size={svgStyle.size} /> },
];

const Tech = () => {
  const [rows, setRows] = useState({
    programming_languages: [],
    tools_and_frameworks: [],
    other: [],
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const calculateRows = (width, techArray) => {
    let dynamicRows = [];
    let startIndex = 0;
    let rowSize = 6;

    if (width < 500) {
      dynamicRows = [
        techArray.slice(0, 3),
        techArray.slice(3, 5),
        techArray.slice(5, 8),
        techArray.slice(8, 10),
      ];
    } else {
      while (startIndex < techArray.length) {
        const endIndex = startIndex + rowSize;
        dynamicRows.push(techArray.slice(startIndex, endIndex));
        startIndex += rowSize;
        rowSize = rowSize === 6 ? 5 : 6;
      }
    }

    return dynamicRows;
  };

  useEffect(() => {
    const calculateRowsForAllCategories = () => {
      const rowsData = {
        programming_languages: calculateRows(window.innerWidth, programming_languages),
        tools_and_frameworks: calculateRows(window.innerWidth, tools_and_frameworks),
        other: calculateRows(window.innerWidth, other),
      };
      setRows(rowsData);
    };

    calculateRowsForAllCategories();

    const handleResize = () => {
      calculateRowsForAllCategories();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hexagonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: Math.random() * 1.5,
        duration: 0.5,
        type: "spring"
      }
    },
    hover: {
      scale: 1.05,
      zIndex: 2,
      transition: { duration: 0.3 }
    }
  };

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(/[_\s]+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const renderCategory = (categoryName, categoryRows) => (
    <motion.div
      key={categoryName}
      className="category-container"
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.h2
        className="category-title top"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'Verdana', sans-serif",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{toTitleCase(categoryName)}</motion.h2>
      <div className="honeycomb-grid">
        {categoryRows?.map((row, rowIndex) => (
          <div
            key={`${categoryName}-row-${rowIndex}`}
            className={`honeycomb-row ${rowIndex % 2 === 1 ? "staggered-row" : ""}`}
          >
            {row.map((tech) => (
              <div key={`${categoryName}-row-${rowIndex}-${tech.id}`}>
                <motion.div
                  key={`${categoryName}-row-${rowIndex}-${tech.id}`}
                  id={`${categoryName}-row-${rowIndex}-${tech.id}`}
                  className="hexagon"
                  variants={hexagonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  data-tip={tech.id}
                >
                  <div style={{ position: "relative", zIndex: 10, pointerEvents: "none" }}>
                    {tech.icon}
                  </div>
                </motion.div>
                <Tooltip anchorSelect={`#${categoryName}-row-${rowIndex}-${tech.id}`} place="top" style={{ zIndex: 9999 }}>
                  {tech.name}
                </Tooltip>
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="skills" ref={ref}>
      <div className="container">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Technical Proficiencies</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>
        {renderCategory("programming_languages", rows.programming_languages)}
        {renderCategory("tools_and_frameworks", rows.tools_and_frameworks)}
        {renderCategory("other", rows.other)}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");