import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithFileRoutes } from "../tanstack-router/file-route-utils";

describe("Experience Route", () => {
  it("should render the route component", async () => {
    renderWithFileRoutes({
      initialLocation: "/experience",
    });

    expect(
      await screen.findByText("University of Waterloo", { exact: false }),
    ).toBeInTheDocument();
  });
});
