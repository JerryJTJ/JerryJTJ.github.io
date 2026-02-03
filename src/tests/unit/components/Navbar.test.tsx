import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

vi.mock("@tanstack/react-router", async () => {
  const originalModule = await vi.importActual("@tanstack/react-router");

  return {
    ...originalModule,
    Link: ({ children }: { children: React.ReactNode }) => (
      <a href="www.mocklink.com">{children}</a>
    ),
  };
});

describe("Navbar", () => {
  it("renders properly", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "JERRY JU" })).toBeInTheDocument();
  });
});
