"use client";
import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { ElectricConnectionLine } from "@/app/components/edges/electricConnectionLine";
import { nodeTypes } from "@/lib/utils/types/nodes";
import { edgeTypes } from "@/lib/utils/types/edges";
import { onNodesChangeAtom } from "@/lib/atom/nodes";
import useValidateNodes from "@/app/hooks/useValidateNodes";
import { useSetAtom } from "jotai";
import { onConnectChange, onEdgesChange } from "@/lib/atom/edges";
import {
  defaultEdgeOptions,
  propOptions,
} from "@/lib/constants/initial-setup-data";

export default function App() {
  const onEdgeChange = useSetAtom(onEdgesChange);
  const onNodesChange = useSetAtom(onNodesChangeAtom);
  const onConnection = useSetAtom(onConnectChange);
  const { nds, eds } = useValidateNodes();
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nds}
        defaultEdgeOptions={defaultEdgeOptions}
        edges={eds}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgeChange}
        onConnect={onConnection}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        connectionLineComponent={ElectricConnectionLine}
        proOptions={propOptions}
        fitView
      >
        <Background variant={BackgroundVariant.Dots} />
        <Controls className="text-black" />
      </ReactFlow>
    </div>
  );
}
