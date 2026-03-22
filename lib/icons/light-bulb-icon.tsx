export default function LightBulbIcon() {
  return (
    <div>
      <div style={{ position: "relative", width: 48, height: 48, padding: 0 }}>
        <svg
          width="48"
          height="48"
          viewBox="-10  0 42 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter>
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

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
            stroke="currentColor"
            strokeWidth="1.5"
          />

          {/* Glass shine */}
          <ellipse cx="10.5" cy="7" rx="2" ry="3" fill="white" />

          {/* Filament */}
          <line x1="12" y1="14" x2="12" y2="8" strokeWidth="1.5" />

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
        </svg>{" "}
      </div>
    </div>
  );
}
