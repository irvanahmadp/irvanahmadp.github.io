import Link from "next/link";
import { useState, ReactElement } from "react";
import {
  Button,
  Tags,
  Card,
  CardsContainer,
  ProjectModal,
} from "src/components";
import type { ProjectModalDataProps } from "src/components";
import { translation } from "src/hooks/useLanguage";
import articles from "src/data/articles.json";
import contacts from "src/data/contacts.json";
import projects from "src/data/projects.json";
import BasicLayout from "src/layouts/BasicLayout";

const porjectsShow = projects.slice(0, 6);

const Page = () => {
  return (
    <>
      <HomeContainer />
      <ArticleContainer />
      <ProjectContainer />
      <AboutContainer />
    </>
  );
};

const HomeContainer = () => {
  const t = translation();

  return (
    <div
      id="home"
      className="flex h-full-content min-h-full-content scroll-m-14 items-center justify-center overflow-hidden bg-gradient-to-b from-violet-400 via-fuchsia-400 to-purple-400 px-4 py-20 dark:from-violet-500 dark:via-fuchsia-400 dark:to-purple-500 md:h-full-content-md md:min-h-full-content-md md:scroll-mt-20 md:bg-gradient-to-r md:px-16 xl:px-32"
    >
      <div className="mt-8 flex min-h-full w-full items-center justify-center rounded-xl bg-gradient-to-b from-white/75 to-white/10 p-8 dark:from-black/75 dark:to-black/10 md:mt-0">
        <div className="text-center text-3xl md:text-5xl md:leading-tight">
          <p className="font-bold">{t.home.greeting}</p>
          <p className="font-light md:font-extralight">{t.home.message}</p>
        </div>
      </div>
    </div>
  );
};

const ArticleContainer = () => {
  const t = translation();

  return (
    <div
      id="articles"
      className="min-h-full-content scroll-mt-14 px-4 py-8 dark:bg-slate-900 md:min-h-full-content-md md:scroll-mt-20 md:px-16 xl:px-32"
    >
      <div className="mb-8 text-center text-4xl font-light">
        {t.article.title}
      </div>

      {articles.map((article, i) => {
        return (
          <div key={i} className="my-8 flex gap-4">
            <img
              alt={article.title}
              src={article.thumbnail}
              className="h-20 w-20 rounded border border-slate-200 object-cover md:h-28 md:w-28"
              placeholder="blur"
            />
            <div className="flex flex-col justify-between">
              <div className="title">
                <Link href={article.repository_url}>
                  <a className="text-xl hover:text-purple-500 dark:hover:text-purple-300 md:text-2xl">
                    {article.title}
                  </a>
                </Link>
              </div>
              <p className="hidden text-justify text-lg md:inline">
                {article.desc}
              </p>

              <Tags
                variant="box"
                data={article.tags}
                className="cursor-default"
              />

              <Link href={article.repository_url}>
                <a className="text-slate-600 hover:text-purple-500 dark:text-slate-300 dark:hover:text-purple-300 md:text-lg">
                  {t.article.read_article} →
                </a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ProjectContainer = () => {
  const t = translation();
  const [isOpen, setIsOpen] = useState(false);
  const [projectModalData, setProjectModalData] =
    useState<ProjectModalDataProps>({ title: "", slug: "/", tags: [] });

  function openProjectModal(project: ProjectModalDataProps) {
    setIsOpen(true);
    setProjectModalData(project);
  }

  return (
    <>
      <ProjectModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={projectModalData}
      />
      <div
        id="projects"
        className="flex min-h-full-content scroll-mt-14 flex-col bg-slate-100 px-4 py-8 dark:bg-slate-700 md:min-h-full-content-md md:scroll-mt-20 md:px-16 xl:px-32"
      >
        <div className="mb-8 text-center text-4xl font-light">
          {t.project.title}
        </div>
        <CardsContainer>
          {porjectsShow.map((project, i) => {
            return (
              <Card
                key={i}
                onClick={() => openProjectModal(project)}
                title={project.title}
                bgColor={project["bg-color"]}
                thumbnail={project.thumbnail}
                tags={project.tags}
                placeholderText={t.project.view_project}
              />
            );
          })}
        </CardsContainer>
        <div className="m-auto mt-8 mb-2">
          <Link href="/projects#" scroll={true}>
            <Button>See All Projects</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

const AboutContainer = () => {
  const t = translation();

  return (
    <div
      id="about"
      className="flex min-h-last-content scroll-mt-14 flex-col bg-white bg-gradient-to-tl from-violet-400 via-fuchsia-400 to-purple-400
        px-4 py-8 dark:bg-slate-900 dark:from-violet-500 dark:via-fuchsia-400 dark:to-purple-500 md:min-h-last-content-md md:scroll-mt-20 md:px-16 xl:px-32"
    >
      <div className="text-center text-4xl font-light">{t.about.title}</div>

      <div className="m-auto rounded-lg bg-white/75 py-4 px-8 dark:bg-slate-900/75 md:w-[28rem]">
        <p className="text-3xl font-light leading-snug dark:font-normal">
          {t.about.greeting}
        </p>
        <p className="text-3xl font-light leading-snug dark:font-normal">
          {t.about.i_am}{" "}
          <span className="text-purple-700 dark:text-purple-300">
            {t.about.job_title}
          </span>
        </p>
        <p className="mt-0.5 text-lg md:text-justify md:text-xl">
          {t.about.description}
        </p>
        <div className="my-3 flex justify-center gap-3 md:gap-6">
          {contacts.map((contact, i) => {
            return (
              <a key={i} href={contact.url}>
                <img
                  className="h-10 w-10 duration-300 hover:scale-125"
                  alt={contact.alt}
                  src={contact["img-url"]}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: "Irvan Ahmad P",
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout meta={meta}>{page}</BasicLayout>;
};

export default Page;
