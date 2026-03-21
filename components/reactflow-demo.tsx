import { ElectricConnectionLine } from "@/app/components/edges/electricConnectionLine";
import {
  defaultEdgeOptions,
  initialEdges,
  initialNodes,
  propOptions,
} from "@/lib/constants/initial-setup-data";
import { edgeTypes } from "@/lib/utils/types/edges";
import { nodeTypes } from "@/lib/utils/types/nodes";
import { ReactFlow } from "@xyflow/react";

export default function ReactFlowDemoStatic() {
  return (
    <ReactFlow
      className="nopan cursor-none"
      nodes={initialNodes}
      defaultEdgeOptions={defaultEdgeOptions}
      edges={initialEdges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      connectionLineComponent={ElectricConnectionLine}
      fitView
      zoomOnScroll={false}
      zoomOnPinch={false}
      aria-disabled={true}
      elementsSelectable={false}
      nodesDraggable={false}
      nodesConnectable={false}
      proOptions={propOptions}
    ></ReactFlow>
  );
}
