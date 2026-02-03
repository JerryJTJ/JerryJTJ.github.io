import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AboutCard from "@/components/AboutCard";

describe("About Card", () => {
  it("renders properly", () => {
    const aboutCard = render(<AboutCard />);
    expect(aboutCard).toMatchSnapshot();
  });
});
