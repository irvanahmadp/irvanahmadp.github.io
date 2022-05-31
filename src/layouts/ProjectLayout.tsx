import { FC, ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Nav, Setting, Footer, Tags } from "src/components";
import projects from "src/data/projects.json";

type ProjectLayoutProps = {
  children: ReactElement;
};

const ProjectLayout: FC<ProjectLayoutProps> = ({ children }) => {
  const router = useRouter();
  const slug = router.pathname;

  const project = projects.find((p) => {
    return p.slug === slug;
  });

  if (typeof project === "undefined") {
    return <div>404</div>;
  }

  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <Nav />
      <Setting />
      <div className="flex min-h-last-content flex-col justify-between bg-slate-100 pb-8 dark:bg-slate-700 md:min-h-last-content-md md:py-8 md:px-16 lg:flex-row xl:px-32">
        <article className="prose w-full max-w-none overflow-x-auto border-b border-slate-300 bg-white p-4 prose-headings:my-2 prose-h1:text-3xl prose-p:my-0 prose-code:rounded prose-code:bg-slate-200 prose-code:p-1 prose-code:font-normal prose-pre:my-4 prose-img:rounded-lg dark:prose-invert dark:border-slate-600 dark:bg-slate-800 dark:text-inherit dark:prose-code:bg-slate-700 dark:prose-pre:bg-slate-700 md:rounded-lg md:border md:p-8">
          <div className="flex items-center">
            <h1 className="flex-grow">
              <Link href={project.slug}>
                <a className="no-underline">{project.title}</a>
              </Link>
            </h1>

            {typeof project.repository_url !== "undefined" && (
              <a
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-12 items-center justify-center rounded-md border-2 border-slate-300 text-sm text-slate-900 no-underline hover:bg-slate-200 focus:outline-none dark:border-slate-400 dark:text-slate-50 dark:hover:bg-slate-500 md:h-10 md:w-16 md:pb-1 md:text-base"
                href={project.repository_url}
              >
                &lt; / &gt;
              </a>
            )}
          </div>
          <Tags variant="box" data={project.tags} />
          <span>{project.description}</span>
          <hr className="my-4 border-slate-300 dark:border-slate-400" />

          {children}
        </article>

        <div className="my-4 mx-4" />

        <div className="sticky h-auto w-full divide-y divide-slate-300 self-baseline border-y border-slate-300 bg-white dark:divide-slate-700 dark:border-slate-600 dark:bg-slate-800 md:rounded-lg md:border lg:top-28 lg:w-[32rem]">
          <div className="block cursor-default p-4 font-semibold">
            <span className="text-xl text-slate-600 dark:text-slate-300">
              Other Projects
            </span>
            <Link href="/projects">
              <a className="float-right leading-8 text-purple-500 hover:text-purple-600 dark:text-purple-300 dark:hover:text-purple-400">
                See all
              </a>
            </Link>
          </div>
          {projects.map((project, i) => {
            if (project.slug !== slug) {
              return (
                <Link key={i} href={project.slug}>
                  <a className="group block p-4 py-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900">
                    <span className="text-lg font-semibold text-slate-600 group-hover:text-slate-700 dark:text-slate-200 dark:group-hover:text-slate-400">
                      {project.title}
                    </span>

                    <Tags variant="text" data={project.tags} />
                  </a>
                </Link>
              );
            }
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectLayout;
