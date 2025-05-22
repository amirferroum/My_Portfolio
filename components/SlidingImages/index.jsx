'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import styles from './style.module.scss'
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGithub,
  SiVite,
  SiGraphql,
  SiSass,
  SiPython
} from 'react-icons/si'

const slider1 = [
  { icon: <SiReact color="#61DAFB" /> },
  { icon: <SiNextdotjs color="#000000" /> },
  { icon: <SiTailwindcss color="#38BDF8" /> },
  { icon: <SiJavascript color="#F7DF1E" /> },
  { icon: <SiTypescript color="#3178C6" /> },
  { icon: <SiRedux color="#764ABC" /> },
  { icon: <SiHtml5 color="#E34F26" /> },
  { icon: <SiCss3 color="#1572B6" /> },
  { icon: <SiSass color="#CC6699" /> },
  { icon: <SiVite color="#646CFF" /> }
]

const slider2 = [
  { icon: <SiNodedotjs color="#339933" /> },
  { icon: <SiExpress color="#000000" /> },
  { icon: <SiMongodb color="#47A248" /> },
  { icon: <SiPostgresql color="#336791" /> },
  { icon: <SiFirebase color="#FFCA28" /> },
  { icon: <SiDocker color="#2496ED" /> },
  { icon: <SiGit color="#F05032" /> },
  { icon: <SiGithub color="#181717" /> },
  { icon: <SiGraphql color="#E10098" /> },
  { icon: <SiPython color="#3776AB" /> }
]

export default function TechSlider() {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((tech, index) => (
          <div key={index} className={styles.project} style={{ backgroundColor: 'transparent' }}>
            {tech.icon}
          </div>
        ))}
      </motion.div>

      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((tech, index) => (
          <div key={index} className={styles.project} style={{ backgroundColor: 'transparent' }}>
            {tech.icon}
          </div>
        ))}
      </motion.div>

      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  )
}
