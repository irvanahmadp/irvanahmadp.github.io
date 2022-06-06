import { ReactElement } from "react";
import Link from "next/link";
import BasicLayout from "src/layouts/BasicLayout";
import { Card, CardsContainer, Container } from "src/components";
import { translation } from "src/hooks/useLanguage";
import projects from "src/data/projects.json";

const Projects = () => {
  const t = translation();

  return (
    <>
      <div className="scroll-m-0 bg-white dark:bg-slate-700">
        <Container className="min-h-last-content py-8 md:min-h-last-content-md">
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
        </Container>
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
