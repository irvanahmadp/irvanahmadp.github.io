import {
  BookIcon,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-12 md:py-16 px-4 flex flex-col md:flex-row justify-between space-y-4">
      <div>
        <h3 className="text-3xl font-semibold">Let’s build something</h3>
        <p className="text-slate-400">
          Collaborations or just a friendly hello—my inbox is open.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/irvanahmadp/"
          target="_blank"
          className="btn btn-primary btn-sm"
        >
          <LinkedinIcon className="size-4" /> Linkedin
        </a>
        <a
          href="https://github.com/irvanahmadp/"
          target="_blank"
          className="btn btn-outline btn-sm"
        >
          <GithubIcon className="size-4" /> Github
        </a>
        <a
          href="https://irvanahmadp.medium.com/"
          target="_blank"
          className="btn btn-outline btn-sm"
        >
          <BookIcon className="size-4" /> Medium
        </a>
      </div>
    </section>
  );
}
