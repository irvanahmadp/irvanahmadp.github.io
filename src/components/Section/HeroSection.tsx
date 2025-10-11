import { useState } from "react"
import { motion } from "motion/react"
import { SendIcon, SparklesIcon } from "lucide-react"
import { TextEffect } from '@components/motion-primitives/text-effect'
import ProjectsSection from "@components/Section/ProjectsSection"
import heroImage from '@assets/images/hero.jpg';

export default function HeroSection(){
  const [heroDone, setHeroDone] = useState(false)

  return (
    <div className="min-h-screen">
      <section className="pt-14 pb-12 md:pt-20 md:pb-16 gap-8 flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="inline-flex px-2.5 py-4 text-sm gap-2 items-center text-slate-300">
            <span className="size-1.5 rounded-full animate-pulse bg-green-500"></span>
            Open to interesting opportunities
          </div>

          <TextEffect per="word" as="h1" preset='slide' className="text-4xl lg:text-6xl font-semibold">
            Building modern, easy-to-use apps with great user experiences
          </TextEffect>

          <motion.div
            className="my-4 leading-relaxed text-slate-300"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.1}}
          >
            I’m Irvan, a developer who loves building clean, modern apps that make a real impact.
            I care about the small details that enhance user experience.
            I focus on web development — building APIs, front-end interfaces, and full-stack applications.
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{opacity: 0, y: 25}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 1.25}}
          >
            <a href="#projects" className="btn btn-primary"><SparklesIcon className="size-4"/> Explore Project</a>
            <a href="#about" className="btn btn-outline"><SendIcon className="size-4" /> Say Hello</a>
          </motion.div>
        </div>

        <motion.div
          className="hidden md:flex justify-center lg:justify-end flex-1 size-[400px] rounded overflow-hidden"
          initial={{opacity: 0, x: 125}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 1.5}}
          onAnimationComplete={() => setHeroDone(true)}
        >
          <img src={heroImage.src} className="object-cover" alt="Irvan Ahmad P."/>
        </motion.div>
      </section>

      { heroDone && <ProjectsSection /> }
    </div>
  )
}