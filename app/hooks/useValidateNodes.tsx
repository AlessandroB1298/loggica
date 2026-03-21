import { useMemo } from "react";
import { nodesAtom } from "@/lib/atom/nodes";
import { handleValidatedEdges } from "@/lib/helpers/edgeHelper";
import { handleNodeChanges } from "@/lib/helpers/nodeHelper";
import { useAtom, useAtomValue } from "jotai";
import { edgesAtom } from "@/lib/atom/edges";

export default function useValidateNodes() {
  const [, setNodes] = useAtom(nodesAtom);
  const nodes = useAtomValue(nodesAtom);
  const edges = useAtomValue(edgesAtom);

  const nodePowerStates = useMemo(() => {
    return handleNodeChanges({ nodes, edges });
  }, [nodes, edges]);

  useMemo(() => {
    const hasChanged = nodes.some(
      (node) => node.data.isOn !== nodePowerStates[node.id],
    );

    if (hasChanged) {
      setNodes((nds) =>
        nds.map((node) => ({
          ...node,
          data: { ...node.data, isOn: nodePowerStates[node.id] },
        })),
      );
    }
  }, [nodes, setNodes, nodePowerStates]);

  return { nds: nodes, eds: handleValidatedEdges({ edges, nodePowerStates }) };
}
