"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn } from "../utils/motion"
import { resume, profilepic } from "../assets"

import { FaLinkedinIn, FaGithub, FaFilePdf } from 'react-icons/fa';

import { Tooltip } from "react-tooltip"

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <div ref={sectionRef} className="pt-[60px] md:pt-0 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="w-full md:w-1/3 flex flex-col items-center"
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-[0_0_22.5px_7.5px_rgba(128,0,1028,1.0)] bg-[#7e6175]">
            <div className="w-full h-full overflow-hidden">
              <img
                src={profilepic || "/placeholder.svg"}
                alt="Vincent Fung"
                className="w-full h-full object-cover"
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }}
              />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-5 justify-center">
            <motion.button
              id="linkedin-button"
              className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-md shadow-[0_5px_0_0_rgba(0,0,0,0.6)] transition-all duration-100 ease-in-out hover:shadow-[0_3px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] active:translate-y-1 active:shadow-none select-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://www.linkedin.com/in/vinceefung/", "_blank")}
            >
              <FaLinkedinIn size={48} />
            </motion.button>
            <Tooltip anchorSelect={`#linkedin-button`} place="top" style={{ zIndex: 9999 }}>
              https://www.linkedin.com/in/vinceefung/
            </Tooltip>

            <motion.button
              id="github-button"
              className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-md shadow-[0_5px_0_0_rgba(0,0,0,0.6)] transition-all duration-100 ease-in-out hover:shadow-[0_3px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] active:translate-y-1 active:shadow-none select-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://github.com/sireoh", "_blank")}
            >
              <FaGithub size={48} />
            </motion.button>
            <Tooltip anchorSelect={`#github-button`} place="top" style={{ zIndex: 9999 }}>
              https://github.com/sireoh
            </Tooltip>

            <motion.button
              id="resume-button"
              className="px-16 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-[0_5px_0_0_rgba(0,0,0,0.6)] transition-all duration-100 ease-in-out hover:shadow-[0_3px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] active:translate-y-1 active:shadow-none select-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(resume, "_blank")}
            >
              <span className="flex flex-col items-center font-bold text-lg">
                <FaFilePdf size={48} />Resume
              </span>
            </motion.button>
            <Tooltip anchorSelect={`#resume-button`} place="top" style={{ zIndex: 9999 }}>
              View Resume
            </Tooltip>
          </div>
        </motion.div>

        <motion.div variants={fadeIn("left", "spring", 0.5, 0.75)} className="w-full md:w-2/3">
          <motion.ul
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl space-y-6 list-none"
          >
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.1, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">👨‍💻</span>
              <span>
                I&apos;m a Software Engineer with over <span className="font-bold text-purple-400">4 years</span> of experience in software development.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.2, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">🎓</span>
              <span>
                I have completed my Diploma of Science in Computer Science at <span className="font-bold text-purple-400">British Columbia Institute of Technology</span>,
                I&apos;m all about building reliable, scalable software that makes a difference.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.3, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">🛠</span>
              <span>
                From full-stack development to cloud-based solutions, I&apos;ve led enterprise-level projects that
                streamline operations and deliver real impact.
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.4, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">🔧</span>
              <span>
                I enjoy automating workflows, optimizing systems, and turning complex challenges into real results. 📈
              </span>
            </motion.li>
            <motion.li className="flex items-start" variants={fadeIn("up", "spring", 0.5, 0.75)}>
              <span className="mr-4 text-2xl flex-shrink-0">💡</span>
              <span>I&apos;m always curious and constantly learning.</span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about")
