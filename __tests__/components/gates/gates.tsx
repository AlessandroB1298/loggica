import AndGate from "@/app/components/gates/andGate";
import NorGate from "@/app/components/gates/norGate";
import NotGate from "@/app/components/gates/notGate";
import OrGate from "@/app/components/gates/orGate";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ReactFlowProvider } from "@xyflow/react";

describe("Gates", () => {
  it("Should render and gate ", () => {
    const { container } = render(
      <ReactFlowProvider>
        <AndGate />
      </ReactFlowProvider>,
    );
    const andGate = container.querySelector("svg");
    expect(andGate).toBeInTheDocument();
    const paths = andGate.querySelectorAll("path");
    expect(paths!.length).toBe(1);

    expect(paths[0]).toHaveAttribute(
      "d",
      "M 30 5 L 50 5 Q 80 5 80 30 Q 80 55 50 55 L 30 55 Z",
    );
  });

  it("Should render or gate", () => {
    const { container } = render(
      <ReactFlowProvider>
        <OrGate />
      </ReactFlowProvider>,
    );
    const orGate = container.querySelector("svg");
    expect(orGate).toBeInTheDocument();
    const paths = orGate.querySelectorAll("path");
    expect(paths!.length).toBe(2);

    expect(paths[0]).toHaveAttribute("d", "M 20 5 Q 30 5 35 30 Q 30 55 20 55");
    expect(paths[1]).toHaveAttribute("d", "M 20 5 Q 60 5 80 30 Q 60 55 20 55");
  });

  it("Should render nor gate", () => {
    const { container } = render(
      <ReactFlowProvider>
        <NorGate />
      </ReactFlowProvider>,
    );
    const norGate = container.querySelector("svg");
    expect(norGate).toBeInTheDocument();
    const paths = norGate.querySelectorAll("path");
    expect(paths!.length).toBe(2);

    expect(paths[0]).toHaveAttribute("d", "M 20 5 Q 30 5 35 30 Q 30 55 20 55");
    expect(paths[1]).toHaveAttribute("d", "M 20 5 Q 60 5 80 30 Q 60 55 20 55");
  });

  it("Should render not gate", () => {
    const { container } = render(
      <ReactFlowProvider>
        <NotGate />
      </ReactFlowProvider>,
    );
    const notGate = container.querySelector("svg");
    expect(notGate).toBeInTheDocument();
    const paths = notGate.querySelectorAll("path");
    expect(paths!.length).toBe(1);

    expect(paths[0]).toHaveAttribute("d", "M 20 5 L 20 45 L 70 25 Z");
  });
});
