import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import type { Project } from "@/data/data.interface";
import ProjectCard from "@/components/ProjectCard";

describe("Project Card", () => {
  it("renders all filled properties properly", () => {
    const mockProject: Project = {
      name: "Krusty Krab",
      location: "Bikini Bottom",
      role: "Fry Cook",
      description:
        "Worked under Mr. Krabs to deliver high quality food products",
      technologies: "Spatula",
      link: "https://en.wikipedia.org/wiki/Krusty_Krab",
      type: "SOFTWARE",
    };

    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText(mockProject.name)).toBeInTheDocument();
    expect(screen.getByText(mockProject.role!)).toBeInTheDocument();
    expect(
      screen.getByText(mockProject.technologies!, { exact: false }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", mockProject.link);
  });
  it("doesn't render empty optional properties", () => {
    const mockProject: Project = {
      name: "Krusty Krab",
      location: "Bikini Bottom",
      role: "Fry Cook",
      link: "https://en.wikipedia.org/wiki/Krusty_Krab",
      type: "SOFTWARE",
    };

    render(<ProjectCard project={mockProject} />);

    expect(
      screen.queryByText("Tech Stack", { exact: false }),
    ).not.toBeInTheDocument();
  });
});
