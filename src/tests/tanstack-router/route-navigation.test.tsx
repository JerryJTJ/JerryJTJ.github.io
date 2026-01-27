import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider } from "@tanstack/react-router";
import {
  createTestRouterFromFiles,
  renderWithFileRoutes,
} from "./file-route-utils";

describe("File-Based Route Navigation", () => {
  it("should navigate between file-based routes", async () => {
    const user = userEvent.setup();

    const { router } = renderWithFileRoutes({
      initialLocation: "/",
    });

    // Initial state - should be on home route
    expect(
      await screen.findByText("Welcome to my website!", { exact: false }),
    ).toBeInTheDocument();
    expect(router.state.location.pathname).toBe("/");

    // Click navigation link
    await user.click(await screen.findByRole("link", { name: /projects/i }));

    // Should navigate to projects route
    expect(await screen.findByText("💻 SOFTWARE")).toBeInTheDocument();
    expect(router.state.location.pathname).toBe("/projects");
  });
  it("should display not found card on invalid route", async () => {
    const router = createTestRouterFromFiles("/invalidroute");
    render(<RouterProvider router={router} />);

    expect(
      await screen.findByText("Page Not Found!", { exact: false }),
    ).toBeInTheDocument();
  });
});
