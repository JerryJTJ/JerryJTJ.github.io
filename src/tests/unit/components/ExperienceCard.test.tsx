import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import type { Experience } from "@/data/data.interface";
import ExperienceCard from "@/components/ExperienceCard";

describe("Experience Card", () => {
  it("renders all filled properties properly", () => {
    const mockExperience: Experience = {
      company: "Krusty Krab",
      date: "May 1999 - present",
      location: "Bikini Bottom",
      role: "Fry Cook",
      description:
        "Worked under Mr. Krabs to deliver high quality food products",
      technologies: "Spatula",
      image:
        "https://static.wikia.nocookie.net/logopedia/images/8/8a/KK_main_logo.png/revision/latest?cb=20250125082603",
    };

    render(<ExperienceCard experience={mockExperience} />);

    expect(screen.getByText(mockExperience.company)).toBeInTheDocument();
    expect(screen.getByText(mockExperience.date)).toBeInTheDocument();
    expect(screen.getByText(mockExperience.location)).toBeInTheDocument();
    expect(screen.getByText(mockExperience.role)).toBeInTheDocument();
    expect(screen.getByText(mockExperience.description)).toBeInTheDocument();
    expect(
      screen.getByText(mockExperience.technologies!, { exact: false }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("img")).toHaveAttribute(
      "src",
      mockExperience.image,
    );
  });
  it("doesn't render empty optional properties", () => {
    const mockExperience: Experience = {
      company: "Krusty Krab",
      location: "Bikini Bottom",
      role: "Fry Cook",
      date: "May 1999 - present",
      description:
        "Worked under Mr. Krabs to deliver high quality food products",
    };

    render(<ExperienceCard experience={mockExperience} />);

    expect(
      screen.queryByText("Tech Stack", { exact: false }),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toHaveAttribute("src");
  });
});
