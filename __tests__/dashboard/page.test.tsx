import Home from "../../app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home Page", () => {
  it("Should render heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Welcome to the site/,
    });

    expect(heading).toBeTruthy();
  });
});
