import { Card } from "@heroui/react";
import type { Experience } from "@/data/data.types";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard(props: ExperienceCardProps) {
  const { experience } = props;

  return (
    <Card
      className="w-full items-stretch md:flex-row border-fg bg-surface-quaternary/30 backdrop-blur-sm"
      variant="quaternary"
    >
      <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
        <img
          alt={`${experience.company} logo`}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
          loading="lazy"
          src={
            experience.image ??
            "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
          }
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="text-lg">{experience.company}</Card.Title>
          <Card.Content className="italic">{experience.role}</Card.Content>
        </Card.Header>
        <Card.Description className="flex flex-col">
          {experience.description}

          {experience.technologies &&
            `Technologies Used: ${experience.technologies}`}
        </Card.Description>
      </div>
      <div className="flex flex-col gap-3 h-full">
        <Card.Footer className="flex w-full flex-col items-end gap-2 h-full">
          <span className="text-xs text-muted">{experience.date}</span>
          <span className="text-xs text-muted">{experience.location}</span>
        </Card.Footer>
      </div>
    </Card>
  );
}
