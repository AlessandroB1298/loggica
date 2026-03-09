import { atom } from "jotai";
import { Node, Edge, applyNodeChanges, NodeChange } from "@xyflow/react";
export type AppNode = Node<
  { label: string; isOn: boolean },
  "switch" | "andGate" | "orGate" | "norGate" | "notGate"
>;

export const nodesAtom = atom<AppNode[]>([]);
export const edgesAtom = atom<Edge[]>([]);

// Action atom to handle changes efficiently
export const onNodesChangeAtom = atom(
  null,
  (get, set, changes: NodeChange[]) => {
    set(
      nodesAtom,
      applyNodeChanges(changes, get(nodesAtom) || []) as AppNode[],
    );
  },
);
