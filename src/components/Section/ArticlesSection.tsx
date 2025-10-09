import { ArrowRightIcon } from "lucide-react"
import { motion, stagger } from "motion/react"

export default function ArticlesSection() {
  const articles = [1, 2, 3, 4]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: stagger(0.35)
      }
    },
  }

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="articles" className="py-12 md:py-16 scroll-mt-20 space-y-4">
      <motion.h2
        className="text-3xl font-medium"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
      >
        Latest Articles
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{once: true}}
      >
        {
          articles.map(article => {
            return (
              <motion.article
                variants={item}
                className="group space-y-2 hover:-translate-y-0.5 rounded shadow"
              >
                <div className="overflow-hidden aspect-[3/2] rounded">
                  <img alt="article" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop" />
                </div>

                <div className="flex gap-2 items-center">
                  <div className="badge badge-outline badge-secondary rounded-sm">Performance</div>
                  <span className="text-xs text-slate-400">8 min read</span>
                </div>

                <h3 className="font-medium text-lg tracking-tight group-hover:underline decoration-zinc-500/50 underline-offset-2">Designing resilient UI states with optimistic updates</h3>
                <p className="text-slate-400">Strategies to keep interfaces responsive while data catches up.</p>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-500">Aug 12, 2025</span>
                  <a href="" target="_blank">
                    Read <ArrowRightIcon className="size-5 inline" />
                  </a>
                </div>
              </motion.article>
            )
          })
        }
      </motion.div>
    </section>
  )
}