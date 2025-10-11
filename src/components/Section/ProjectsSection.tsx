import { useState } from "react"
import { CodeIcon, MonitorIcon } from "lucide-react"
import { AnimatePresence, motion, stagger } from "motion/react"
import {cn} from "../../lib/utils"
import projects from "../../data/projects.json"

export default function ProjectsSection() {
  const [category, setCategory] = useState("All")

  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        delayChildren: stagger(0.35)
      }
    }
  }

  const item = {
    hidden: {opacity: 0, y: 25},
    show: {opacity: 1, y: 0}
  }

  return (
    <section id="projects" className="scroll-mt-20 space-y-4 pb-12 md:pb-16">
      <motion.div
        className="mb-4"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
      >
        <h2 className="text-3xl font-medium">Selected Projects</h2>
        <div className="flex flex-col space-y-4 md:flex-row justify-between">
          <p className="text-slate-400">Some of my personal projects.</p>
          <div className="flex gap-1.5 justify-center">
            <button
              onClick={() => setCategory("All")}
              className={cn("btn btn-xs rounded-4xl", category === "All" ? "btn-primary" : "btn-outline")}
            >
              All
            </button>
            <button
              onClick={() => setCategory("Website")}
              className={cn("btn btn-xs rounded-4xl", category === "Website" ? "btn-primary" : "btn-outline")}
            >
              Website
            </button>
            <button
              onClick={() => setCategory("API")}
              className={cn("btn btn-xs rounded-4xl", category === "API" ? "btn-primary" : "btn-outline")}
            >
              API
            </button>
            <button
              onClick={() => setCategory("Mobile")}
              className={cn("btn btn-xs rounded-4xl", category === "Mobile" ? "btn-primary" : "btn-outline")}
            >
              Mobile
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        key={category}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{once: true}}
      >
        <AnimatePresence>
          {projects.map((project, i) => {
            if (category !== "All" && project.category !== category) return

            return (
              <motion.div
                key={i}
                className="space-y-2 card bg-base-200"
                variants={item}
                exit={{opacity: 0}}
              >
                <div className="rounded aspect-[3/1.5] overflow-hidden bg-primary/25 flex justify-center items-center">
                  <span className="font-semibold text-2xl tracking-tight">{project.title}</span>
                </div>

                <div className="card-body">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <div className="badge badge-soft badge-success">{tag}</div>
                    ))}
                  </div>

                  <h3 className="font-medium text-lg tracking-tight">{project.title}</h3>
                  <p className="text-slate-400">{project.description}</p>

                  <div className="flex gap-2">
                    { project.code
                      && <a href={project.code} className="btn btn-xs btn-primary"><CodeIcon className="size-4"/> Code</a>
                    }

                    { project.demo &&
                      <a href={project.demo} className="btn btn-xs btn-secondary">
                        <MonitorIcon className="size-4"/> Demo
                      </a>
                    }
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}