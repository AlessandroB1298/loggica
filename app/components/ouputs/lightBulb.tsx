import { AppNode } from "@/lib/utils/types/nodes";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { memo } from "react";

export const LightBulb = memo(function LightBulb({
  data,
  id,
}: NodeProps<AppNode>) {
  const glowColor = "#27F5F5";
  return (
    <div
      className="text-foreground"
      style={{ position: "relative", width: 100, height: 60, padding: 10 }}
    >
      <svg
        width={48}
        height={48}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={`bulb-glow-${data.isOn}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer glow when ON */}
        {data.isOn && (
          <circle cx="12" cy="10" r="8" fill={glowColor} opacity="0.3" />
        )}

        {/* Main bulb shape */}
        <path
          d="M 12 3 
           C 15 3, 17 5, 17 8
           C 17 10, 16 11.5, 15 13
           C 14.5 13.5, 14 14, 14 15
           L 14 16
           L 10 16
           L 10 15
           C 10 14, 9.5 13.5, 9 13
           C 8 11.5, 7 10, 7 8
           C 7 5, 9 3, 12 3 Z"
          fill={data.isOn ? "#fffbeb" : "#f3f4f6"}
          stroke="currentColor"
          strokeWidth="1.5"
          opacity={data.isOn ? "0.9" : "0.7"}
        />

        {/* Glass shine */}
        <ellipse
          cx="10.5"
          cy="7"
          rx="2"
          ry="3"
          fill="white"
          opacity={data.isOn ? "0.6" : "0.3"}
        />

        {/* Filament */}
        <line
          x1="12"
          y1="14"
          x2="12"
          y2="8"
          stroke={glowColor}
          strokeWidth="1.5"
          opacity={data.isOn ? "1" : "0.4"}
          filter={data.isOn ? `url(#bulb-glow-${data.isOn})` : undefined}
        />

        {/* Socket threads */}
        <rect
          x="10"
          y="16"
          width="4"
          height="1.5"
          fill="currentColor"
          opacity="0.6"
          rx="0.5"
        />
        <rect
          x="10"
          y="18"
          width="4"
          height="1.5"
          fill="currentColor"
          opacity="0.5"
          rx="0.5"
        />
        <rect
          x="10"
          y="20"
          width="4"
          height="1.5"
          fill="currentColor"
          opacity="0.6"
          rx="0.5"
        />
      </svg>
      <Handle
        type="target"
        position={Position.Bottom}
        id={`lightbulb-input-${id}`}
        style={{ bottom: "0%", left: "35%" }}
      />
    </div>
  );
});
