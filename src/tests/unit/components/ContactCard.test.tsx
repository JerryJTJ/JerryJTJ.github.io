import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContactCard from "@/components/ContactCard";

describe("Contact Card", () => {
  it("renders properly", () => {
    const { container } = render(<ContactCard />);
    expect(container).toMatchSnapshot();
  });
});
