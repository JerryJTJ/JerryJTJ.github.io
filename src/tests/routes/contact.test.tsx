import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithFileRoutes } from "../tanstack-router/file-route-utils";

describe("Contact Route", () => {
  it("should render the route component", async () => {
    renderWithFileRoutes({
      initialLocation: "/contact",
    });

    expect(
      await screen.findByRole("link", { name: "jerry.ju@uwaterloo.ca" }),
    ).toHaveAttribute("href", "mailto:jerry.ju@uwaterloo.ca");
  });
});
