import Link from "next/link";
import { useState, ReactElement, FC } from "react";
import {
  Button,
  Tags,
  Card,
  CardsContainer,
  Container,
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
  const [isOpen, setIsOpen] = useState(false);
  const [projectModalData, setProjectModalData] =
    useState<ProjectModalDataProps>({ title: "", slug: "/", tags: [] });

  function openProjectModal(project: ProjectModalDataProps) {
    setIsOpen(true);
    setProjectModalData(project);
  }

  return (
    <>
      <HomeContainer />
      <ArticleContainer />
      <ProjectContainer handleClick={openProjectModal} />
      <AboutContainer />

      <ProjectModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={projectModalData}
      />
    </>
  );
};

const HomeContainer = () => {
  const t = translation();

  return (
    <section
      id="home"
      className="scroll-m-14 bg-gradient-to-b from-violet-400 via-fuchsia-400 to-purple-400 dark:from-violet-500 dark:via-fuchsia-500 dark:to-purple-500 md:scroll-mt-20 md:bg-gradient-to-r"
    >
      <Container className="h-full-content-md py-20 md:h-full-content-md">
        <div className="flex min-h-full w-full items-center justify-center rounded-xl bg-gradient-to-b from-white/75 to-white/10 p-8 dark:from-black/75 dark:to-black/10">
          <div className="text-center text-3xl md:text-5xl md:leading-tight">
            <p className="font-bold">{t.home.greeting}</p>
            <p className="font-light md:font-extralight">{t.home.message}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

const ArticleContainer = () => {
  const t = translation();

  return (
    <section
      id="articles"
      className="scroll-mt-14 dark:bg-slate-900 md:scroll-mt-20"
    >
      <Container className="py-8">
        <div className="mb-8 text-center text-4xl font-light">
          {t.article.title}
        </div>

        {articles.map((article, i) => {
          return (
            <div key={i} className="my-8 flex">
              <img
                alt={article.title}
                src={article.thumbnail}
                className="mr-4 h-20 w-20 rounded border border-slate-200 object-cover md:h-28 md:w-28"
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
      </Container>
    </section>
  );
};

type ProjectContainerProps = {
  handleClick: any;
};

const ProjectContainer: FC<ProjectContainerProps> = ({ handleClick }) => {
  const t = translation();

  return (
    <section
      id="projects"
      className="scroll-mt-14 bg-slate-100 dark:bg-slate-700 md:scroll-mt-20"
    >
      <Container className="flex flex-col py-8">
        <div className="mb-8 text-center text-4xl font-light">
          {t.project.title}
        </div>
        <CardsContainer>
          {porjectsShow.map((project, i) => {
            return (
              <Card
                key={i}
                onClick={() => handleClick(project)}
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
          <Link href="/projects#">
            <a>
              <Button>View All Projects</Button>
            </a>
          </Link>
        </div>
      </Container>
    </section>
  );
};

const AboutContainer = () => {
  const t = translation();

  return (
    <section
      id="about"
      className="scroll-mt-14 bg-white bg-gradient-to-tl from-violet-400 via-fuchsia-400 to-purple-400 dark:bg-slate-900 dark:from-violet-500 dark:via-fuchsia-500 dark:to-purple-500 md:scroll-mt-20"
    >
      <Container className="flex min-h-last-content flex-col py-8 md:min-h-last-content-md">
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
          <div className="my-3 grid grid-flow-col justify-center gap-3 md:gap-6">
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
      </Container>
    </section>
  );
};

const meta = {
  title: "Irvan Ahmad P",
  description: "Irvan Ahmad's personal website"
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout meta={meta}>{page}</BasicLayout>;
};

export default Page;
