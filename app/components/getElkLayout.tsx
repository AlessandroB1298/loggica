// getElkLayout.tsx
import ELK from "elkjs";
import { ElkNode } from "elkjs/lib/elk.bundled";
export type DagreLayoutDirections = "TB" | "LR";
export type ElkDirectionType = "RIGHT" | "LEFT" | "UP" | "DOWN";
import { CustomEdge } from "@/lib/utils/types/edges";
import { AppNode } from "@/lib/utils/types/nodes";

type ElkLayoutType = {
  appNodes: AppNode[];
  customEdges: CustomEdge[];
  direction: ElkDirectionType;
};

export default async function getElkLayout({
  appNodes,
  customEdges,
  direction = "RIGHT",
}: ElkLayoutType) {
  const isRight = direction === "RIGHT";
  const isLeft = direction === "LEFT";
  const isUp = direction === "UP";
  var targetPosition = isRight
    ? "left"
    : isLeft
      ? "right"
      : isUp
        ? "bottom"
        : "top";
  var sourcePosition = isRight
    ? "right"
    : isLeft
      ? "left"
      : isUp
        ? "top"
        : "bottom";
  const elk = new ELK();
  const graph: ElkNode = {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": direction,
      "elk.edgeRouting": "POLYLINE",
      "elk.spacing.nodeNode": "200",
      "elk.spacing.edgeNode": "200",
      "elk.layered.spacing.nodeNodeBetweenLayers": "150",
    },
    children: appNodes.map((node) => ({
      id: node.id,
      "elk.position": {
        x: node.position?.x,
        y: node.position?.y,
      },
    })),
    edges: customEdges.map((edge) => ({
      id: edge.id,
      sources: [edge.source],
      targets: [edge.target],
    })),
  };

  const layout = await elk.layout(graph);
  if (!layout || !layout.children) {
    return {
      appNodes: [],
      customEdges: [],
    };
  }

  return {
    appNodes: layout.children.map((node) => {
      const initialNode = appNodes.find((n) => n.id === node.id);
      if (!initialNode) {
        throw new Error("Node not found");
      }
      return {
        ...initialNode,
        position: {
          x: node.x,
          y: node.y,
        },
        sourcePosition,
        targetPosition,
      } as AppNode;
    }),
    customEdges: (layout.edges ?? []).map((edge) => {
      const initialEdge = customEdges.find((e) => e.id === edge.id);
      if (!initialEdge) {
        throw new Error("Edge not found");
      }
      return {
        ...initialEdge,
        source: edge.sources[0],
        target: edge.targets[0],
      } as CustomEdge;
    }),
  };
}
