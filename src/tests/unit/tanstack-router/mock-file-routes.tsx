// src/test/mock-file-routes.tsx
import { createFileRoute } from "@tanstack/react-router";
import type { FileRoutesByPath } from "@tanstack/react-router";

// Mock individual route for isolated testing
export const createMockFileRoute = (
  path: keyof FileRoutesByPath,
  component: React.ComponentType,
  options: any = {},
) => {
  return createFileRoute(path)({
    component,
    ...options,
  });
};

// Common test route components
export const TestHomeRoute = createMockFileRoute("/", () => (
  <div data-testid="home">Home Page</div>
));

export const TestContactRoute = createMockFileRoute("/contact", () => (
  <div data-testid="about">Contact Page</div>
));

export const TestExperienceRoute = createMockFileRoute("/experience", () => (
  <div data-testid="about">Experience Page</div>
));

export const TestProjectsRoute = createMockFileRoute("/projects", () => (
  <div data-testid="about">Projects Page</div>
));
