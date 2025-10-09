import { CodeIcon, MonitorIcon } from "lucide-react"
import { motion, stagger } from "motion/react"

export default function ProjectsSection() {
  const works = [0,1,2,3]

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
        <div className="flex justify-between">
          <p className="text-slate-400">Some of my personal projects.</p>
          <div className="flex gap-1.5">
            <button className="btn btn-xs btn-primary rounded-4xl">All</button>
            <button className="btn btn-xs btn-outline rounded-4xl">Website</button>
            <button className="btn btn-xs btn-outline rounded-4xl">API</button>
            <button className="btn btn-xs btn-outline rounded-4xl">Mobile</button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{once: true}}
      >
        {works.map((work) => (
          <motion.div
            className="shadow rounded-lg space-y-2"
            variants={item}
          >
            <div className="rounded aspect-[3/2] overflow-hidden">
              <img alt="work" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"/>
            </div>

            <div className="flex gap-2">
              <div className="badge badge-soft badge-success">React</div>
            </div>

            <h3 className="font-medium text-lg tracking-tight">OrderFlow</h3>
            <p className="text-slate-400">Website for manage order</p>

            <div className="flex gap-2">
              <button className="btn btn-xs btn-primary"><CodeIcon className="size-4"/> Code</button>
              <button className="btn btn-xs btn-secondary"><MonitorIcon className="size-4"/> Demo</button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}