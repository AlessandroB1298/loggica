import { Handle, Position } from "@xyflow/react";

export default function NotGate() {
  return (
    <div style={{ position: "relative", width: 100, height: 60, padding: 10 }}>
      {/* Target Handles (inputs) - positioned at the two input lines */}
      <Handle
        type="target"
        position={Position.Left}
        id="input-1"
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

      {/* Source Handle (output) - positioned at the output line on the right */}
      <Handle
        type="source"
        position={Position.Right}
        id="output"
        style={{ top: "50%" }}
      />
    </div>
  );
}
