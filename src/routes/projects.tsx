import { createFileRoute } from "@tanstack/react-router";
import type { Project } from "@/data/data.interface";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/project.list";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  const software = new Array<Project>();
  const writing = new Array<Project>();

  projects.forEach((project) => {
    switch (project.type) {
      case "SOFTWARE":
        software.push(project);
        break;
      case "WRITING":
        writing.push(project);
        break;
      default:
        writing.push(project);
        break;
    }
  });

  return (
    <div className="w-full flex justify-center my-10">
      <div className="flex flex-col max-w-[75vw] md:max-w-[65vw] items-center gap-4">
        <h1 className="text-lg font-semibold">💻 SOFTWARE</h1>
        {software.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
        <h1 className="text-lg font-semibold pt-8">📝 WRITING</h1>
        {writing.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
