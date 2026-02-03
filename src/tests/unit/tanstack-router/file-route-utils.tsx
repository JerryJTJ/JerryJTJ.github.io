import React from "react";
import { render } from "@testing-library/react";
import {
  RouterProvider,
  createMemoryHistory,
  createRouter,
} from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "../../../routeTree.gen";
import type { RenderOptions } from "@testing-library/react";

// Create test router with generated route tree
export function createTestRouterFromFiles(initialLocation = "/") {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: [initialLocation],
    }),
    context: {
      // Add any required context for your routes
    },
    defaultNotFoundComponent: () => {
      return <div>Page Not Found!</div>;
    },
  });

  return router;
}

// Custom render function for file-based routes
interface RenderWithFileRoutesOptions extends Omit<RenderOptions, "wrapper"> {
  initialLocation?: string;
  routerContext?: any;
}

export function renderWithFileRoutes({
  initialLocation = "/",
  routerContext = {},
  ...renderOptions
}: RenderWithFileRoutesOptions = {}) {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: [initialLocation],
    }),
    context: routerContext,
  });

  return {
    ...render(<RouterProvider router={router} />, renderOptions),
    router,
  };
}

// Helper to test specific file routes
export function createMockFileRoute(
  path: string,
  component: React.ComponentType,
) {
  // This is useful for isolated testing when you don't want to use the full route tree
  return {
    path,
    component,
    // Add other common route properties as needed
  };
}
