import { ReactElement } from "react";
import Link from "next/link";
import BasicLayout from "src/layouts/BasicLayout";
import { Card, CardsContainer } from "src/components";
import { translation } from "src/hooks/useLanguage";
import projects from "src/data/projects.json";

const Projects = () => {
  const t = translation();

  return (
    <>
      <div className="min-h-last-content scroll-m-0 bg-white px-4 py-8 dark:bg-slate-700 md:min-h-last-content-md md:px-16 xl:px-32">
        <div className="mb-8 text-center text-4xl font-light">
          {t.project.title}
        </div>

        <CardsContainer>
          {projects.map((project, i) => {
            return (
              <Link key={i} href={project.slug}>
                <a>
                  <Card
                    title={project.title}
                    bgColor={project["bg-color"]}
                    thumbnail={project.thumbnail}
                    tags={project.tags}
                    placeholderText={t.project.view_project}
                  />
                </a>
              </Link>
            );
          })}
        </CardsContainer>
      </div>
    </>
  );
};

const meta = {
  title: "Projects",
};

Projects.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout meta={meta}>{page}</BasicLayout>;
};

export default Projects;
