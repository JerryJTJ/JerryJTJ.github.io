import { createFileRoute } from "@tanstack/react-router";
import ExperienceCard from "@/components/ExperienceCard";
import experiences from "@/data/experience.list";

export const Route = createFileRoute("/experience")({
  component: Experience,
});

function Experience() {
  return (
    <div className="w-full flex justify-center my-10">
      <div className="flex flex-col max-w-[75vw] items-center gap-4">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.date}`}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
}
