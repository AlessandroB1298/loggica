import { DefaultEdgeOptions, Node } from "@xyflow/react";

export const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: false,
  type: "electric",
};
export const initialNodes: Node[] = [
  {
    id: "2",
    type: "andGate",
    position: { x: 300, y: 250 },
    data: { label: "AND" },
  },
  {
    id: "3",
    type: "andGate",
    position: { x: 650, y: 175 },
    data: { label: "AND" },
  },
  {
    id: "4",
    type: "switch",
    position: { x: -90, y: 175 },
    data: { label: "Switch", isOn: true },
  },
];
export const initialEdges = [
  {
    id: "e1-3",
    source: "4",
    target: "2",
    animated: false,
    data: { isValid: true },
  },

  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: false,
    data: { isValid: false },
  },
];
export const propOptions = { hideAttribution: true };
