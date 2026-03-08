import { Handle, NodeProps, Position } from "@xyflow/react";
import { motion } from 'motion/react';
import { useState } from "react";



interface AnimatedSwitchProps extends NodeProps {
  width?: number;
  height?: number;
  onToggle?: (isUp: boolean) => void;
  initialState?: boolean; // true = up, false = down
  className?: string;
}

export default function Switch({
  width = 80,
  height = 120,
  onToggle,
  initialState = true,
  className = ""

}: AnimatedSwitchProps){
  const [isUp, setIsUp] = useState(initialState);

  const handleClick = () => {
    const newState = !isUp;
    setIsUp(newState);
    onToggle?.(newState);
  };

  // Calculate positions
  const leverUpY = 25;
  const leverDownY = 75;
  const leverY = isUp ? leverUpY : leverDownY;


  return(
    <div style={{ position: 'relative', width: 100, height: 60, padding: 10 }}>

        <div className="text-foreground">
          <svg
               width={width}
               height={height}
               viewBox="0 0 80 120"
               className={`cursor-pointer select-none ${className}`}
               onClick={handleClick}
               style={{ userSelect: 'none' }}
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

               {/* Connection wire/arm */}
               <motion.line
                 x1="40"
                 y1={leverY}
                 x2="40"
                 y2="60"
                 stroke="currentColor"
                 strokeWidth="4"
                 strokeLinecap="round"
                 initial={false}
                 animate={{
                   y1: leverY,
                 }}
                 transition={{
                   type: "spring",
                   stiffness: 300,
                   damping: 20,
                 }}
               />

               {/* Lever handle */}
               <motion.g
                 initial={false}
                 animate={{
                   y: isUp ? -35 : 15,
                 }}
                 transition={{
                   type: "spring",
                   stiffness: 300,
                   damping: 20,
                 }}
               >
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
               </motion.g>

               {/* Status indicator light */}
               <motion.circle
                 cx="40"
                 cy={isUp ? 25 : 95}
                 r="4"
                 initial={false}
                 animate={{
                   cy: isUp ? 25 : 95,
                   fill: isUp ? "#22c55e" : "#ef4444",
                   opacity: 1,
                 }}
                 transition={{
                   type: "spring",
                   stiffness: 300,
                   damping: 20,
                 }}
               />

               {/* Glow effect for active terminal */}
               <motion.circle
                 cx="40"
                 cy={isUp ? 25 : 95}
                 r="8"
                 initial={false}
                 animate={{
                   cy: isUp ? 25 : 95,
                   fill: isUp ? "#22c55e" : "#ef4444",
                   opacity: [0.5, 0.2, 0.5],
                 }}
                 transition={{
                   cy: {
                     type: "spring",
                     stiffness: 300,
                     damping: 20,
                   },
                   opacity: {
                     repeat: Infinity,
                     duration: 2,
                     ease: "easeInOut",
                   }
                 }}
               />

               {/* Labels */}
               <text
                 x="72"
                 y="30"
                 fontSize="12"
                 fill="currentColor"
                 className="opacity-60"
                 style={{ fontWeight: isUp ? 'bold' : 'normal' }}
               >
                 ON
               </text>
               <text
                 x="72"
                 y="100"
                 fontSize="12"
                 fill="currentColor"
                 className="opacity-60"
                 style={{ fontWeight: !isUp ? 'bold' : 'normal' }}
               >
                 OFF
               </text>
             </svg>

        </div>
        <Handle
          type="source"
          position={Position.Right}
          id="input-1"
          style={{ top: '65%', left: '80%' }}
        />
    </div>
  )
}
