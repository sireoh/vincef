import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Tooltip } from "react-tooltip";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiPython,
  SiTypescript,
  SiOpenjdk,
} from "react-icons/si";

const svgStyle = {
  "size": 64,
  "color": "default"
}

const programming_languages = [
  { name: "Python", icon: <SiPython size={svgStyle.size} color={svgStyle.color} /> },
  { name: "Java", icon: <SiOpenjdk size={svgStyle.size} color={svgStyle.color} /> },
  { name: "JavaScript", icon: <SiJavascript size={svgStyle.size} color={svgStyle.color} /> },
  { name: "TypeScript", icon: <SiTypescript size={svgStyle.size} color={svgStyle.color} /> },
  { name: "Docker", icon: <SiDocker size={svgStyle.size} color={svgStyle.color} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={svgStyle.size} color={svgStyle.color} /> },
  { name: "React JS", icon: <SiReact size={svgStyle.size} color={svgStyle.color} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={svgStyle.size} color={svgStyle.color} /> },
  { name: "MongoDB", icon: <SiMongodb size={svgStyle.size} color={svgStyle.color} /> },
];

const tools_and_frameworks = [
  { name: "Python", icon: <SiPython size={svgStyle.size} color={svgStyle.color} /> },
  { name: "Java", icon: <SiOpenjdk size={svgStyle.size} color={svgStyle.color} /> },
  { name: "JavaScript", icon: <SiJavascript size={svgStyle.size} color={svgStyle.color} /> },
  { name: "TypeScript", icon: <SiTypescript size={svgStyle.size} color={svgStyle.color} /> },
  { name: "Docker", icon: <SiDocker size={svgStyle.size} color={svgStyle.color} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={svgStyle.size} color={svgStyle.color} /> },
  { name: "React JS", icon: <SiReact size={svgStyle.size} color={svgStyle.color} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={svgStyle.size} color={svgStyle.color} /> },
  { name: "MongoDB", icon: <SiMongodb size={svgStyle.size} color={svgStyle.color} /> },
];

const other = [
  { name: "Python", icon: <SiPython size={svgStyle.size} color={svgStyle.color} /> },
  { name: "Java", icon: <SiOpenjdk size={svgStyle.size} color={svgStyle.color} /> },
  { name: "JavaScript", icon: <SiJavascript size={svgStyle.size} color={svgStyle.color} /> },
  { name: "TypeScript", icon: <SiTypescript size={svgStyle.size} color={svgStyle.color} /> },
  { name: "Docker", icon: <SiDocker size={svgStyle.size} color={svgStyle.color} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={svgStyle.size} color={svgStyle.color} /> },
  { name: "React JS", icon: <SiReact size={svgStyle.size} color={svgStyle.color} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={svgStyle.size} color={svgStyle.color} /> },
  { name: "MongoDB", icon: <SiMongodb size={svgStyle.size} color={svgStyle.color} /> },
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
              <div key={`${categoryName}-row-${rowIndex}-${tech.name}`}>
                <motion.div
                  key={`${categoryName}-row-${rowIndex}-${tech.name}`}
                  id={`${categoryName}-row-${rowIndex}-${tech.name}`}
                  className="hexagon"
                  variants={hexagonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  data-tip={tech.name}
                >
                  <div style={{ position: "relative", zIndex: 10, pointerEvents: "none" }}>
                    {tech.icon}
                  </div>
                </motion.div>
                <Tooltip anchorSelect={`#${categoryName}-row-${rowIndex}-${tech.name}`} place="top" style={{ zIndex: 9999 }}>
                  {tech.name}
                </Tooltip>
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );

  /**
   * Helper function to format category names
   * @param {string} name 
   * @returns a string with underscores replaced by spaces and the first letter of each word capitalized
   */
  const toTitleCase = (name) => {
    return name
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

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