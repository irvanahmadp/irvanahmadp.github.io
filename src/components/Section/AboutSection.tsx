import { MailIcon } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 grid md:grid-cols-3 py-12 md:py-16">
      <div className="md:col-span-1">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="text-slate-400">A little context, a lot of curiosity.</p>
      </div>

      <div className="md:col-span-2 space-y-4">
        <p className="text-slate-800 dark:text-slate-300">I care about user experience, edge cases, and how my work affects users. I also value writing clean, maintainable code that’s easy to update when needed.</p>
        <p className="text-slate-800 dark:text-slate-300">My favorite stack is the React ecosystem and Tailwind CSS. I also have experience with other technologies like Laravel, Bootstrap, and CodeIgniter.</p>

        <div className="flex gap-2">
          <a href="https://www.linkedin.com/in/irvanahmadp/" target="_blank" className="btn btn-primary"><MailIcon className="size-4" /> Get in touch</a>
        </div>
      </div>
    </section>
  )
}