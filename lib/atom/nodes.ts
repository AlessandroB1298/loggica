import { atom } from "jotai";
import { applyNodeChanges, NodeChange, XYPosition } from "@xyflow/react";
import { v4 as uuidv4 } from "uuid"; // Import v4 and alias it as uuidv4
import { AppNode } from "../utils/types/nodes";

export const nodesAtom = atom<AppNode[]>([]);

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

const getId = () => `dndnode_${uuidv4()}`;

export const onCreateNewNode = atom(
  null,
  (
    get,
    set,
    { nodeType, position }: { nodeType: string; position: XYPosition },
  ) => {
    const newNode: AppNode = {
      id: getId(),
      type: nodeType as AppNode["type"], // Cast to your allowed types
      position,
      data: {
        label: `${nodeType}`,
        isOn: false, // Initialize state
      },
    };

    set(nodesAtom, (nds) => nds.concat(newNode));
  },
);
