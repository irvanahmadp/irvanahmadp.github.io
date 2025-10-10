import { ArrowRightIcon } from "lucide-react"
import { motion, stagger } from "motion/react"
import articles from "../../data/articles.json"

export default function ArticlesSection() {
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
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="group space-y-2 hover:-translate-y-0.5"
              >
                <div className="overflow-hidden aspect-[3/2] rounded">
                  <img alt="article" className="w-full h-full object-cover" src={article.thumbnail} />
                </div>

                <div className="flex gap-2 items-center">
                  { article.tags.map((tag) => (
                    <div className="badge badge-outline badge-success badge-sm rounded-sm">{tag}</div>
                  ))}
                  <span className="text-xs text-slate-400">{article.read_time}</span>
                </div>

                <h3 className="font-medium text-lg tracking-tight group-hover:underline decoration-zinc-500/50 underline-offset-2">{article.title}</h3>
                <p className="text-slate-400">{article.desc}</p>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-500">{article.publish_date}</span>
                  <a href={article.url} target="_blank">
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