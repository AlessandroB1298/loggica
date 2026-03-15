import { atom } from "jotai";
import { Node, Edge, applyNodeChanges, NodeChange } from "@xyflow/react";
import { CustomEdge } from "@/app/components/edges/electricEdgeAnimated";
export type AppNode = Node<
  { label: string; isOn: boolean; id: number },
  "switch" | "andGate" | "orGate" | "norGate" | "notGate"
>;

export const nodesAtom = atom<AppNode[]>([]);
export const edgesAtom = atom<CustomEdge[]>([]);

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
