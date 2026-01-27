import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { routeTree } from "../../routeTree.gen";
import { renderWithFileRoutes } from "./file-route-utils";

describe("Generated Route Tree", () => {
  it("should generate route tree from file structure", () => {
    // Test that route tree exists and has expected structure
    expect(routeTree).toBeDefined();
    expect(routeTree.children).toBeDefined();
  });

  it("should include all expected routes", () => {
    // Get all route paths from the generated tree
    const getAllRoutePaths = (
      tree: any,
      paths: Array<string> = [],
    ): Array<string> => {
      if (tree.options.path) {
        paths.push(tree.options.path);
      }
      if (tree.children) {
        tree.children.forEach((child: any) => {
          getAllRoutePaths(child, paths);
        });
      }
      return paths;
    };

    const routePaths = getAllRoutePaths(routeTree);

    // Test that expected routes are present
    expect(routePaths).toContain("/");
    expect(routePaths).toContain("/contact");
    expect(routePaths).toContain("/experience");
    expect(routePaths).toContain("/projects");
    // Add assertions for your specific routes
  });

  it("should have correct route hierarchy", () => {
    // Test parent-child relationships
    const homeRoute = routeTree.children
      ? Object.values(routeTree.children).find(
          (child: any) => child.options?.path === "/",
        )
      : undefined;

    expect(homeRoute).toBeDefined();

    // Test for specific route structure based on your file organization
    // For example, if you have /posts/$postId routes:
    // const postsRoute = routeTree.children?.find((child: any) => child.path === '/posts')
    // expect(postsRoute?.children).toBeDefined()
  });
});

describe("File Route Conventions", () => {
  it("should render index route at root path", async () => {
    renderWithFileRoutes({
      initialLocation: "",
    });

    // Test that the index route component renders
    // This depends on what your src/routes/index.tsx exports
    // Async query waits for element to appear, wrapped in act()
    expect(
      await screen.findByText("Welcome to my website!", { exact: false }),
    ).toBeInTheDocument();
  });
  it("should handle layout routes", async () => {
    // If you have src/routes/_layout.tsx
    renderWithFileRoutes({
      initialLocation: "/about",
    });

    // Test that layout is rendered for nested routes
    expect(
      await screen.findByRole("link", { name: "JERRY JU" }),
    ).toBeInTheDocument();
  });
});

describe("Route Tree Development", () => {
  it("should regenerate routes when files change", () => {
    // This test ensures your route tree is properly generated
    // You can add specific assertions based on your file structure

    expect(routeTree).toBeDefined();
    expect(typeof routeTree.children).toBe("object");

    // Test specific routes exist
    const routes = getAllRouteIds(routeTree);
    expect(routes).toContain("/");
    expect(routes).toContain("/contact");
    expect(routes).toContain("/experience");
    expect(routes).toContain("/projects");
    // Add assertions for your specific routes
  });

  // Helper function to get all route IDs from tree
  function getAllRouteIds(tree: any, ids: Array<string> = []): Array<string> {
    if (tree.id) {
      ids.push(tree.id);
    }
    if (tree.children) {
      Object.values(tree.children).forEach((child: any) => {
        getAllRouteIds(child, ids);
      });
    }
    return ids;
  }
});
