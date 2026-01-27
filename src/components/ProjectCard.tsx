import { Card, Link } from "@heroui/react";
import type { Project } from "@/data/data.interface";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <Card
      className="w-full items-stretch md:flex-row border-fg bg-surface-quaternary/30 backdrop-blur-sm"
      variant="quaternary"
    >
      <div className="flex flex-1 flex-col gap-2">
        <Card.Header className="gap-1">
          <Card.Title className="text-lg">{project.name}</Card.Title>
          <Card.Content className="italic">{project.role}</Card.Content>
        </Card.Header>
        <Card.Description className="flex flex-col gap-2">
          <span>{project.description}</span>
          <span>
            {project.technologies && `Tech Stack: ${project.technologies}`}
          </span>
        </Card.Description>
      </div>
      <div className="flex flex-col gap-3 h-full">
        <Card.Footer className="flex w-full flex-col justify-center items-end gap-2 h-full">
          <Link href={project.link} underline="none">
            🔗
          </Link>
        </Card.Footer>
      </div>
    </Card>
  );
}
