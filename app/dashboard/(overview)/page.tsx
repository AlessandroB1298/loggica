"use client"
import { useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  BackgroundVariant,
  DefaultEdgeOptions,
  Node,
  OnNodesChange,
  OnEdgesChange,
  applyNodeChanges

} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ElectricConnectionLine from '@/app/components/edges/electricConnectionLine';
import { nodeTypes } from '@/lib/nodes';
import { edgeTypes } from '@/lib/edges';
import { useAtom } from 'jotai';
import { nodesAtom } from '@/lib/atom/nodes';


// Default edge options - ensures all new edges are electric type
const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: false,
};

// Initial edges with electric type
const initialEdges = [
  { id: 'e1-3', source: '1', target: '3', animated: false },
  { id: 'e2-3', source: '2', target: '3',  animated: false },
];

export default function App() {

  const [nodes, setNodes] = useAtom(nodesAtom)
  const [edges, setEdges, OnEdgesChange] = useEdgesState(initialEdges);


  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, type: 'electric', animated: true }, eds)),
    [setEdges],
  );
  const onNodesChange : OnNodesChange= useCallback(
     (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
     [setNodes],
   );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        defaultEdgeOptions={defaultEdgeOptions}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={OnEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        connectionLineComponent={ElectricConnectionLine}
        fitView
      >
        <Controls className='text-black' />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />

      </ReactFlow>

    </div>
  );
}
