export default function AndGateIcon() {
  return (
    <div className="text-foreground">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(4, 9)">
          <line
            x1="0"
            y1="8"
            x2="8"
            y2="8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="22"
            x2="8"
            y2="22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M 8 2 L 20 2 Q 36 2 36 15 Q 36 28 20 28 L 8 28 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          <line
            x1="36"
            y1="15"
            x2="44"
            y2="15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
