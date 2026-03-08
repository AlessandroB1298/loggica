import { atom } from "jotai";
import { Node, Edge, applyNodeChanges, NodeChange } from "@xyflow/react";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "andGate",
    position: { x: 250, y: 100 },
    data: { label: "AND" },
  },
  {
    id: "2",
    type: "andGate",
    position: { x: 250, y: 250 },
    data: { label: "AND" },
  },
  {
    id: "3",
    type: "andGate",
    position: { x: 450, y: 175 },
    data: { label: "AND" },
  },
  {
    id: "4",
    type: "switch",
    position: { x: 150, y: 175 },
    data: { label: "Switch" },
  },
];

export const nodesAtom = atom<Node[]>(initialNodes);
export const edgesAtom = atom<Edge[]>([]);

// Action atom to handle changes efficiently
export const onNodesChangeAtom = atom(
  null,
  (get, set, changes: NodeChange[]) => {
    set(nodesAtom, applyNodeChanges(changes, get(nodesAtom)));
  },
);
