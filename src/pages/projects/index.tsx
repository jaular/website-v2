import type { NextPage } from "next";
import { Suspense } from "react";
import Container from "~/components/Container";
import Card from "~/components/Card";
import { projects } from "~/data/projects";

const ProjectsPage: NextPage = () => {
  return (
    <Container
      title="José Aular | Proyectos"
      description="Proyectos en los que he trabajado."
    >
      <div className="space-y-14">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold sm:text-5xl">Proyectos</h1>
          <p className="text-base leading-relaxed text-gray-800 dark:text-gray-300">
            Estos son algunos de mis proyectos
          </p>
        </div>
        <Suspense fallback={null}>
          {projects.length > 0 && (
            <div className="grid gap-8 sm:space-y-0">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  href={project.href}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
          )}
          <div>
            <a
              className="inline-flex items-center justify-center w-full px-8 py-2 text-sm font-medium text-white rounded outline-none sm:w-auto bg-blue hover:opacity-75 focus:opacity-75"
              href="https://github.com/jaular?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Más proyectos</span>
            </a>
          </div>
        </Suspense>
      </div>
    </Container>
  );
};

export default ProjectsPage;
