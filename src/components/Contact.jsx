"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

import {
  SiLinkedin,
  SiGithub,
} from "react-icons/si"

import {
  FaFilePdf,
  FaPhone,
} from "react-icons/fa6";

import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize)
    return () => {
      window.removeEventListener("resize", detectSize)
    }
  }, [])

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden no-select`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-tertiary/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
      >
        <label className="flex flex-row">
          <span className="text-white font-bold mb-4 flex items-center gap-2">
            <IoMdMail className="text-purple-400" />
            Email:&nbsp;
          </span>
          <a href="mailto:vinceefung24@gmail.com" className="text-purple-400 hover:underline">vinceefung24@gmail.com</a>
        </label>
        <label className="flex flex-row">
          <span className="text-white font-bold mb-4 flex items-center gap-2">
            <FaPhone className="text-purple-400" />
            Phone:&nbsp;
          </span>
          <a href="tel:7788360809" className="text-purple-400 hover:underline">(778) 836-0809</a>
        </label>
        <label className="flex flex-row">
          <span className="text-white font-bold mb-4 flex items-center gap-2">
            <SiLinkedin className="text-purple-400" />
            LinkedIn:&nbsp;
          </span>
          <a href="https://www.linkedin.com/in/vinceefung/" className="text-purple-400 hover:underline">linkedin.com/in/vinceefung</a>
        </label>
        <label className="flex flex-row">
          <span className="text-white font-bold mb-4 flex items-center gap-2">
            <SiGithub className="text-purple-400" />
            Github:&nbsp;
          </span>
          <a href="https://github.com/sireoh" className="text-purple-400 hover:underline">github.com/sireoh</a>
        </label>
        <label className="flex flex-row">
          <span className="text-white font-bold mb-4 flex items-center gap-2">
            <FaFilePdf className="text-purple-400" />
            Resume:&nbsp;
          </span>
          <a href="/resume/" className="text-purple-400 hover:underline">[PDF]</a>
        </label>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
