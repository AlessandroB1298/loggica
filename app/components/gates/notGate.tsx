import { AppNode } from "@/lib/utils/types/nodes";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { memo } from "react";

export const NotGate = memo(function NotGate({ id }: NodeProps<AppNode>) {
  return (
    <div style={{ position: "relative", width: 100, height: 60, padding: 10 }}>
      {/* Target Handles (inputs) - positioned at the two input lines */}
      <Handle
        type="target"
        position={Position.Left}
        id={`not-input-${id}`} // Use the node id here too
        style={{ top: "50%" }}
      />

      {/* Custom SVG content */}
      <div className="text-foreground">
        <svg
          viewBox="0 0 100 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="0" y1="25" x2="20" y2="25" />

          {/* Triangle body */}
          <path d="M 20 5 L 20 45 L 70 25 Z" fill="none" />

          {/* NOT bubble */}
          <circle cx="75" cy="25" r="5" fill="none" />

          {/* Output line */}
          <line x1="80" y1="25" x2="100" y2="25" />
        </svg>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id="output"
        style={{ top: "50%" }}
      />
    </div>
  );
});
