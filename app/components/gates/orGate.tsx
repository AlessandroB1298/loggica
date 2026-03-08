import React from 'react';
import { Handle,  Position, type NodeProps } from '@xyflow/react';


export default function OrGate({}: NodeProps){
  return (
    <div style={{ position: 'relative', width: 100, height: 60, padding: 10 }}>
      {/* Target Handles (inputs) - positioned at the two input lines */}
      <Handle
        type="target"
        position={Position.Left}
        id="input-1"
        style={{ top: '35%' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="input-2"
        style={{ top: '75%' }}
      />

      {/* Custom SVG content */}
     <div className='text-foreground'>
       <svg
          viewBox="0 0 100 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {/* Input lines */}
          <line x1="0" y1="15" x2="20" y2="15" />
          <line x1="0" y1="45" x2="20" y2="45" />

          {/* Gate body */}
          <path d="M 20 5 Q 30 5 35 30 Q 30 55 20 55" fill="none" />
          <path d="M 20 5 Q 60 5 80 30 Q 60 55 20 55" fill="none" />
          {/* Output line */}
          <line x1="80" y1="30" x2="100" y2="30" />
        </svg>
     </div>

      {/* Source Handle (output) - positioned at the output line on the right */}
      <Handle
        type="source"
        position={Position.Right}
        id="output"
        style={{ top: '57%' }}
      />
    </div>
  );
}
