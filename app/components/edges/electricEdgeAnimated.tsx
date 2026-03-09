import { BaseEdge, Edge, EdgeProps, getBezierPath } from "@xyflow/react";

export type CustomEdgeData = {
  isValid?: boolean;
};
export type CustomEdge = Edge<CustomEdgeData, "electric">;

export default function ElectricEdgeAnimated({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  selected,
  data,
}: EdgeProps<CustomEdge>) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const isValid = data?.isValid ?? false;
  return (
    <>
      <defs>
        {/* Gradient for the electricity */}
        <linearGradient
          id={`electric-gradient-${id}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            stopColor={isValid ? "#3b82f6" : "#f63b3b"}
            stopOpacity="0"
          >
            <animate
              attributeName="offset"
              values="0;1;1;0"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="50%"
            stopColor={isValid ? "#60a5fa" : "#fa6060"}
            stopOpacity="1"
          >
            <animate
              attributeName="offset"
              values="0.5;1;1;0.5"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="100%"
            stopColor={isValid ? "#93c5fd" : "#fd9393"}
            stopOpacity="0"
          >
            <animate
              attributeName="offset"
              values="1;1;0;1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        {/* Glow filter */}
        <filter id={`glow-${id}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base path */}
      <path
        d={edgePath}
        fill="none"
        stroke={isValid ? "#1e40af" : "#af1e1e"}
        strokeWidth="2"
        strokeOpacity="0.3"
      />

      {/* Animated electricity path */}
      <path
        d={edgePath}
        fill="none"
        stroke={`url(#electric-gradient-${id})`}
        strokeWidth="3"
        strokeLinecap="round"
        filter={`url(#glow-${id})`}
      />

      {/* Sparks - small circles that travel along the path */}
      <circle
        r="3"
        fill={isValid ? "#60a5fa" : "#fa6060"}
        filter={`url(#glow-${id})`}
      >
        <animateMotion dur="1s" repeatCount="indefinite" path={edgePath} />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        r="2"
        fill={isValid ? "#93c5fd" : "#fd9393"}
        filter={`url(#glow-${id})`}
      >
        <animateMotion
          dur="1s"
          repeatCount="indefinite"
          path={edgePath}
          begin="0.3s"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="1s"
          repeatCount="indefinite"
          begin="0.3s"
        />
      </circle>

      <circle
        r="2.5"
        fill={isValid ? "#3b82f6" : "#f63b3b"}
        filter={`url(#glow-${id})`}
      >
        <animateMotion
          dur="1s"
          repeatCount="indefinite"
          path={edgePath}
          begin="0.6s"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="1s"
          repeatCount="indefinite"
          begin="0.6s"
        />
      </circle>
    </>
  );
}
