import { CustomEdge } from "@/app/components/edges/electricEdgeAnimated";
import { AppNode } from "../atom/nodes";

/*
 isNodePowered:
  Recursive function to check the validity of a node and its connections

@params:
  nodeId : string
  currentEdges : CustomEdge[]
  allNodes : AppNodes[]

@Returns:
  boolean
 
  */
export const isNodePowered = (
  nodeId: string,
  currentEdges: CustomEdge[],
  allNodes: AppNode[],
): boolean => {
  const node = allNodes.find((n) => n.id === nodeId);
  if (!node) return false;
  if (node.type === "switch") {
    return !!node.data.isOn;
  }
  // Check if any incoming edge is powered
  const incoming = currentEdges.filter((e) => e.target === nodeId);
  return incoming.some((edge) =>
    //recursive call to check all nodes
    isNodePowered(edge.source, currentEdges, allNodes),
  );
};
