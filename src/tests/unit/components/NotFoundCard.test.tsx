import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFoundCard from "@/components/NotFoundCard";

// Tanstack router links require a router instance
vi.mock("@tanstack/react-router", async () => {
  const originalModule = await vi.importActual("@tanstack/react-router");

  return {
    ...originalModule,
    Link: ({ children }: { children: React.ReactNode }) => (
      <a href="www.mocklink.com">{children}</a>
    ),
  };
});

describe("Not Found Card", () => {
  it("renders properly", () => {
    render(<NotFoundCard />);
    expect(
      screen.getByRole("link", { name: "Click me to return home!" }),
    ).toBeInTheDocument();
  });
});
