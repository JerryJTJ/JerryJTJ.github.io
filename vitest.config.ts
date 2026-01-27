/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
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
    environment: "jsdom",
    setupFiles: ["src/tests/vitest-setup.ts"],
    typecheck: { enabled: true },
    watch: false,
    // Ensure route tree is generated before tests
    globals: true,
  },
});
