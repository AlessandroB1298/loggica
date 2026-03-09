"use client";
import { useCallback, useMemo, useState } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  addEdge,
  Connection,
  BackgroundVariant,
  DefaultEdgeOptions,
  OnNodesChange,
  OnEdgesChange,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ElectricConnectionLine from "@/app/components/edges/electricConnectionLine";
import { nodeTypes } from "@/lib/nodes";
import { edgeTypes } from "@/lib/edges";
import { useAtom } from "jotai";
import { AppNode, nodesAtom } from "@/lib/atom/nodes";
import { CustomEdge } from "@/app/components/edges/electricEdgeAnimated";
import { isNodePowered } from "@/lib/helpers/nodeHelper";

// Default edge options - ensures all new edges are electric type
const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: false,
  type: "electric",
};

export default function App() {
  const [nodes, setNodes] = useAtom(nodesAtom);
  const [edges, setEdges] = useState<CustomEdge[]>([]);

  const validatedEdges = useMemo(() => {
    if (!edges) return [];
    return edges.map((edge) => {
      const valid = isNodePowered(edge.source, edges, nodes);
      return {
        ...edge,
        data: {
          ...edge.data,
          isValid: valid,
        },
      };
    });
  }, [edges, nodes]);

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges(
        (eds) =>
          addEdge(
            {
              ...params,
              type: "electric",
              animated: true,
              data: { isValid: true }, // Initial state
            },
            eds || [],
          ) as CustomEdge[],
      ),
    [setEdges],
  );

  const onNodesChange: OnNodesChange = useCallback(
    (changes) =>
      setNodes(
        (nodesSnapshot) =>
          applyNodeChanges(changes, nodesSnapshot || []) as AppNode[],
      ),
    [setNodes],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) =>
      setEdges(
        (eds) =>
          // We cast the result to CustomEdge[] to satisfy the state type
          applyEdgeChanges(changes, eds || []) as CustomEdge[],
      ),
    [setEdges],
  );
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        defaultEdgeOptions={defaultEdgeOptions}
        edges={validatedEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        connectionLineComponent={ElectricConnectionLine}
        fitView
      >
        <Controls className="text-black" />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
