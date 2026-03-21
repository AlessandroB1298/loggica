import { ElectricEdgeAnimated } from "@/app/components/edges/electricEdgeAnimated";
import { Edge, EdgeTypes } from "@xyflow/react";

// Define edge types
export const edgeTypes: EdgeTypes = {
  electric: ElectricEdgeAnimated,
};

export type ValidatedEdgesProps = {
  edges: CustomEdge[];
  nodePowerStates: Record<string, boolean>;
};

export type CustomEdge = Edge<{ isValid: boolean }, "electric" | "">;
