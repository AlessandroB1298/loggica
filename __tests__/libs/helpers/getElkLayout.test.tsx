import { CustomEdge } from "@/lib/utils/types/edges";
import { AppNode } from "@/lib/utils/types/nodes";
import "@testing-library/jest-dom";
import { Position } from "@xyflow/react";
import getElkLayout, { ElkDirectionType } from "@/app/components/getElkLayout";

describe("getElkLayout", () => {
  const appNodes: AppNode[] = [
    {
      id: "node-1",
      data: { isOn: true, label: "switch" },
      position: { x: 0, y: 0 },
      type: "switch",
    },

    {
      id: "node-2",
      data: { isOn: true, label: "andGate" },
      position: { x: 0, y: 0 },
      type: "andGate",
      handles: [
        {
          id: "andGate-input-1-node-2",
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          type: "source",
          position: Position.Left,
        },
        {
          id: "andGate-input-2-node-2",
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          type: "source",
          position: Position.Left,
        },
      ],
    },
  ];
  const customEdges: CustomEdge[] = [
    {
      id: "edge-1",
      source: "node-1",
      target: "node-2",
      targetHandle: "andGate-input-1-node-2",
      data: { isValid: true },
    },
    {
      id: "edge-2",
      source: "node-1",
      target: "node-2",
      targetHandle: "andGate-input-2-node-2",
      data: { isValid: true },
    },
  ];
  const direction: ElkDirectionType = "RIGHT";

  it("should return object", async () => {
    const params = {
      appNodes: appNodes,
      customEdges: customEdges,
      direction: direction,
    };
    const result = await getElkLayout({
      appNodes: params.appNodes,
      customEdges: params.customEdges,
      direction: params.direction,
    });

    expect(typeof result === "object").toBe(true);
  });
});
