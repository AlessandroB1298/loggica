import { handleValidatedEdges } from "@/lib/helpers/edgeHelper";
import { CustomEdge } from "@/lib/utils/types/edges";
import "@testing-library/jest-dom";

describe("edgeHelper", () => {
  const edges: CustomEdge[] = [
    {
      id: "edge-1",
      source: "node-1",
      target: "node-2",
      targetHandle: "andGate-input-1-node-2",
      data: { isValid: false },
    },
  ];

  const nodePowerStates: Record<string, boolean> = {
    "node-1": true,
  };
  describe("handleValidatedEdges", () => {
    it("should return CustomEdge[]", () => {
      const result = handleValidatedEdges({
        edges: edges,
        nodePowerStates: nodePowerStates,
      });
      expect(typeof result === "object").toBe(true);
    });
    it("should return correct CustomEdge[]", () => {
      const result = handleValidatedEdges({
        edges: edges,
        nodePowerStates: nodePowerStates,
      });
      const expected: CustomEdge[] = [
        {
          id: "edge-1",
          data: { isValid: true },
          animated: true,
          source: "node-1",
          target: "node-2",
          targetHandle: "andGate-input-1-node-2",
        },
      ];
      expect(result).toEqual(expected);
    });
  });
});
