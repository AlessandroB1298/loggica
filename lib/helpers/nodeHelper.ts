import { AppNode } from "../utils/types/nodes";
import { CustomEdge } from "../utils/types/edges";
import { handleGateProps } from "../utils/types/gates";
import { v4 as uuidv4 } from "uuid"; // Import v4 and alias it as uuidv4

/** 
 @func handleAndStatement: Function to take in incoming edges connected to handles, and return correct AND gate logic

 @params
  incoming : CustomEdge[]
  nodeId : string,
  currentEdges : CustomEdge[]
  allNodes : AppNode[]
  visited : Set<string>()
  depth : number

@returns:
  boolean

*/
export const handleAndStatement = ({
  incoming,
  nodeId,
  currentEdges,
  allNodes,
  visited,
  depth,
}: handleGateProps): boolean => {
  const input1Edge = incoming.find(
    (e) => e.targetHandle === `andGate-input-1-${nodeId}`,
  );
  const input2Edge = incoming.find(
    (e) => e.targetHandle === `andGate-input-2-${nodeId}`,
  );

  if (!input1Edge || !input2Edge) {
    return false;
  }

  const p1 = isNodePowered(
    input1Edge.source,
    currentEdges,
    allNodes,
    new Set(visited),
    depth + 1,
  );
  const p2 = isNodePowered(
    input2Edge.source,
    currentEdges,
    allNodes,
    new Set(visited),
    depth + 1,
  );

  const result: boolean = p1 && p2;

  return result;
};

/** 
@func handleSwitchStatement: Function to handle if a SWITCH statement has been turned on/off

 @params
  node : AppNode


@returns
  boolean

*/
export const handleSwitchStatement = (node: AppNode): boolean => {
  return !!node.data.isOn;
};

/** 
@func handleNotStatement: Function to handle NOT gates with two inputs, returning result as a boolean

 @params
  incoming : CustomEdge[]
  nodeId : string,
  currentEdges : CustomEdge[]
  allNodes : AppNode[]
  visited : Set<string>()
  depth : number

@returns
  boolean

*/
export const handleNotStatement = ({
  incoming,
  currentEdges,
  nodeId,
  allNodes,
  visited,
  depth,
}: handleGateProps): boolean => {
  const inputEdge = incoming.find(
    (e) => e.targetHandle === `not-input-${nodeId}`,
  );
  if (!inputEdge) {
    return true;
  }
  const pInput = isNodePowered(
    inputEdge.source,
    currentEdges,
    allNodes,
    new Set(visited),
    depth + 1,
  );

  return !pInput;
};

/**
  @func isNodePowered: Recursive function to check if nodes have correct power to them

  @params 
   nodeId : string
   currentEdges : CustomEdge[]
   allNodes : AppNode[]
   visited : Set<string>
   depth : number

 @returns 
  boolean 
 */
export const isNodePowered = (
  nodeId: string,
  currentEdges: CustomEdge[],
  allNodes: AppNode[],
  visited = new Set<string>(),
  depth = 0,
): boolean => {
  const node = allNodes.find((n) => n.id === nodeId);
  if (!node) return false;

  if (visited.has(nodeId)) {
    return false;
  }
  visited.add(nodeId);

  const incoming: CustomEdge[] = currentEdges.filter(
    (e) => e.target === nodeId,
  );

  switch (node.type) {
    case "switch": {
      return handleSwitchStatement(node);
    }
    case "andGate": {
      return handleAndStatement({
        incoming,
        nodeId,
        currentEdges,
        allNodes,
        visited,
        depth,
      });
    }
    case "notGate": {
      return handleNotStatement({
        incoming,
        nodeId,
        currentEdges,
        allNodes,
        visited,
        depth,
      });
    }
    default: {
      return incoming.some((edge) => {
        return isNodePowered(
          edge.source,
          currentEdges,
          allNodes,
          new Set(visited),
          depth + 1,
        );
      });
    }
  }
};

/**
 @func handleNodeChange: Function that updates nodePowerStates record with new nodes/edges

 @params
  nodes: AppNode[]
  edges: CustomEdge[]

 @returns
  Record<string,boolean>
 */
export const handleNodeChanges = ({
  nodes,
  edges,
}: {
  nodes: AppNode[];
  edges: CustomEdge[];
}): Record<string, boolean> => {
  const nodePowerStates: Record<string, boolean> = {};

  nodes.forEach((node) => {
    nodePowerStates[node.id] = isNodePowered(
      node.id,
      edges,
      nodes,
      new Set(),
      0,
    );
  });
  return nodePowerStates;
};

/**
 @func getId: Function to generate id for custom node

 @params
  None

 @returns
  string 
 */

export const getId = (): string => {
  return `dndnode_${uuidv4()}`;
};
