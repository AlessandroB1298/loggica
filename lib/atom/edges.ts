import { atom } from "jotai";
import { CustomEdge } from "../utils/types/edges";
import {
  applyEdgeChanges,
  EdgeChange,
  addEdge,
  Connection,
} from "@xyflow/react";
export const edgesAtom = atom<CustomEdge[]>([]);

export const onEdgesChange = atom(null, (get, set, changes: EdgeChange[]) => {
  set(
    edgesAtom,
    applyEdgeChanges(changes, get(edgesAtom) || []) as CustomEdge[],
  );
});

export const onConnectChange = atom(null, (get, set, params: Connection) => {
  const edges = get(edgesAtom);

  set(
    edgesAtom,
    addEdge(
      {
        ...params,
        type: "electric",
        animated: true,
        data: { isValid: !!true },
      },
      edges || [],
    ) as CustomEdge[],
  );
});
