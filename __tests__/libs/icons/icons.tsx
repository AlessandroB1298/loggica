import AndGateIcon from "@/lib/icons/and-gate-icon";
import NorGateIcon from "@/lib/icons/nor-gate-icon";
import NotGateIcon from "@/lib/icons/not-gate-icon";
import OrGateIcon from "@/lib/icons/or-gate-icon";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Render Icons", () => {
  it("Should render and gate icon", () => {
    const { container } = render(<AndGateIcon />);
    const andGateIcon = container.querySelector("svg");
    expect(andGateIcon).toBeInTheDocument();
    const paths = andGateIcon!.querySelectorAll("path");
    expect(paths[0]).toHaveAttribute(
      "d",
      "M 8 2 L 20 2 Q 36 2 36 15 Q 36 28 20 28 L 8 28 Z",
    );
  });
  it("Should render or gate icon", () => {
    const { container } = render(<OrGateIcon />);
    const orGateIcon = container.querySelector("svg");
    expect(orGateIcon).toBeInTheDocument();
    const paths = orGateIcon!.querySelectorAll("path");
    expect(paths[0]).toHaveAttribute("d", "M 6 2 Q 10 2 12 15 Q 10 28 6 28");
    expect(paths[1]).toHaveAttribute("d", "M 6 2 Q 26 2 36 15 Q 26 28 6 28");
  });
  it("Should render nor gate icon", () => {
    const { container } = render(<NorGateIcon />);
    const norGateIcon = container.querySelector("svg");
    expect(norGateIcon).toBeInTheDocument();
    const paths = norGateIcon!.querySelectorAll("path");
    expect(paths[0]).toHaveAttribute("d", "M 6 2 Q 10 2 12 15 Q 10 28 6 28");
    expect(paths[1]).toHaveAttribute("d", "M 6 2 Q 26 2 36 15 Q 26 28 6 28");
  });
  it("Should render not gate icon", () => {
    const { container } = render(<NotGateIcon />);
    const notGateIcon = container.querySelector("svg");
    expect(notGateIcon).toBeInTheDocument();
    const paths = notGateIcon!.querySelectorAll("path");
    expect(paths[0]).toHaveAttribute("d", "M 8 2 L 8 22 L 32 12 Z");
  });
});
