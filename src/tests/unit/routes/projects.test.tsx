import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithFileRoutes } from "../tanstack-router/file-route-utils";

describe("Project Route", () => {
  it("should render the route component", async () => {
    renderWithFileRoutes({
      initialLocation: "/projects",
    });

    expect(
      await screen.findByRole("heading", { name: "💻 SOFTWARE" }),
    ).toBeInTheDocument();
  });
});
