

export default function SwitchIcon(){


  return(
    <div className="text-foreground">
      <svg
                 viewBox="-15 -40 150 150"
                 height={60}
                 width={60}
                 className={`cursor-pointer select-none`}
               >
                 {/* Base plate */}
                 <rect
                   x="10"
                   y="10"
                   width="60"
                   height="100"
                   rx="8"
                   fill="currentColor"
                   className="opacity-10"
                   stroke="currentColor"
                   strokeWidth="2"
                 />

                 {/* Upper terminal/connection point */}
                 <circle
                   cx="40"
                   cy="25"
                   r="6"
                   fill="currentColor"
                   className="opacity-40"
                   stroke="currentColor"
                   strokeWidth="1.5"
                 />

                 {/* Lower terminal/connection point */}
                 <circle
                   cx="40"
                   cy="95"
                   r="6"
                   fill="currentColor"
                   className="opacity-40"
                   stroke="currentColor"
                   strokeWidth="1.5"
                 />

                 {/* Middle neutral position indicator */}
                 <line
                   x1="25"
                   y1="60"
                   x2="55"
                   y2="60"
                   stroke="currentColor"
                   strokeWidth="1"
                   strokeDasharray="2,2"
                   className="opacity-30"
                 />

                 {/* Connection wire/arm - ON position */}
                 <line
                   x1="40"
                   y1={25}
                   x2="40"
                   y2="60"
                   stroke="currentColor"
                   strokeWidth="4"
                   strokeLinecap="round"
                 />

                 {/* Lever handle - ON position */}
                 <g transform="translate(0, -35)">
                   {/* Handle base */}
                   <rect
                     x="28"
                     y="50"
                     width="24"
                     height="20"
                     rx="10"
                     fill="currentColor"
                     stroke="currentColor"
                     strokeWidth="2"
                   />

                   {/* Handle grip lines */}
                   <line x1="35" y1="55" x2="35" y2="65" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                   <line x1="40" y1="55" x2="40" y2="65" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                   <line x1="45" y1="55" x2="45" y2="65" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                 </g>

                 {/* Status indicator light - ON */}
                 <circle
                   cx="40"
                   cy={25}
                   r="4"
                   fill="#22c55e"
                   opacity="1"
                 />

                 {/* Glow effect for active terminal */}
                 <circle
                   cx="40"
                   cy={25}
                   r="8"
                   fill="#22c55e"
                   opacity="0.3"
                 />

                 {/* Labels */}
                 <text
                   x="72"
                   y="30"
                   fontSize="12"
                   fill="currentColor"
                   className="opacity-60"
                   style={{ fontWeight: 'bold'  }}
                 >
                   ON
                 </text>
                 <text
                   x="72"
                   y="100"
                   fontSize="12"
                   fill="currentColor"
                   className="opacity-60"
                   style={{ fontWeight: 'normal'  }}
                 >
                   OFF
                 </text>
               </svg>
    </div>
  )
}
