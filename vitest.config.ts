/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  optimizeDeps: {
    exclude: ["chromium-bidi", "fsevents", "lightningcss"],
  },
  plugins: [
    tanstackRouter({
      // Configure for test environment
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
      disableLogging: true,
    }),
    tsconfigPaths(),
    react(),
  ],
  test: {
    // Ensure route tree is generated before tests
    globals: true,
    reporters: process.env.GITHUB_ACTIONS ? ["dot", "github-actions"] : ["dot"],
    projects: [
      {
        extends: true,
        test: {
          setupFiles: ["src/tests/vitest-setup.ts"],
          typecheck: { enabled: true },
          include: ["src/tests/unit/**/*.{test,spec}.{ts,tsx}"],
          name: "unit",
          environment: "jsdom",
        },
      },
    ],
  },
});
