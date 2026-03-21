import { CustomEdge, ValidatedEdgesProps } from "../utils/types/edges";

/** 
  @func handleValidateEdges: Function to check power status and update if needed

  @params
    edges: CustomEdge[]
    nodePowerStates: Record<string,boolean>

  @returns
    CustomEdges[] 

  */
export const handleValidatedEdges = ({
  edges,
  nodePowerStates,
}: ValidatedEdgesProps): CustomEdge[] => {
  return edges.map((edge) => ({
    ...edge,
    animated: nodePowerStates[edge.source] ?? false, // Sync animation to power
    data: {
      ...edge.data,
      isValid: nodePowerStates[edge.source] ?? false, // Pass power status to edge
    },
  }));
};
