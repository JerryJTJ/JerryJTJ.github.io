import { expect, test } from "@playwright/test";

test.describe("File-Based Route E2E", () => {
  test("should navigate through file-based route structure", async ({
    page,
  }) => {
    await page.goto("/");

    // Test home route (from src/routes/index.tsx)
    await expect(
      page.getByRole("heading", { name: "Hey!", exact: false }),
    ).toBeVisible();

    // Should have navbar
    const projectsNavLink = page.getByRole("link", { name: "Projects" });

    // Navigate to about route (from src/routes/about.tsx)
    await projectsNavLink.click();
    await expect(page).toHaveURL("/projects");
    await expect(
      page.getByRole("heading", { name: "💻 SOFTWARE", exact: false }),
    ).toBeVisible();

    // Test browser navigation
    await page.goBack();
    await expect(page).toHaveURL("/");
  });
});
