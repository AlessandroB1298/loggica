"use client"

import { useState, useCallback } from 'react';
import { ReactFlow, Background, applyNodeChanges, applyEdgeChanges, addEdge, type Node, type Edge, OnNodesChange, OnEdgesChange, OnConnect} from '@xyflow/react';
import { useTheme } from 'next-themes';

const initialNodes : Node[] = [
  { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];
const initialEdges : Edge[] = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

export default function Home() {
  const { theme } = useTheme(); // Get the current theme
  const [nodes, setNodes] = useState<Node[]>(initialNodes);

  const [edges, setEdges] = useState<Edge[]>(initialEdges);

    const onNodesChange : OnNodesChange= useCallback(
      (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
      [],
    );
    const onEdgesChange : OnEdgesChange= useCallback(
      (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
      [],
    );
    const onConnect : OnConnect = useCallback(
      (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
      [],
    );

    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          colorMode={theme === 'dark' ? 'dark': 'light'}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background />
        </ReactFlow>
      </div>
    );
}
