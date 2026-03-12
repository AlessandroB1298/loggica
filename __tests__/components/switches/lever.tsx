import Switch from "@/app/components/switches/switch";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ReactFlowProvider } from "@xyflow/react";

describe("Render Custom Switch ", () => {
  const props = {
    id: 1,
    data: { isOn: true },
    width: 80,
    height: 120,
  };
  it("Should render lever switch", () => {
    const { container } = render(
      <ReactFlowProvider>
        <Switch {...props} />
      </ReactFlowProvider>,
    );
    const leverSwitch = container.querySelector("svg");
    expect(leverSwitch).toBeInTheDocument();
    const texts = leverSwitch!.querySelectorAll("text");
    expect(texts[0]).toHaveTextContent("ON");
    expect(texts[1]).toHaveTextContent("OFF");
  });
});
