"use client"

import { useDnDPosition } from '@/app/context/DnDContext';
import AndGateLogo from '@/lib/icons/and-gate-icon';
import NorGateIcon from '@/lib/icons/nor-gate-icon';
import NotGateIcon from '@/lib/icons/not-gate-icon';
import OrGateIcon from '@/lib/icons/or-gate-icon';
import SwitchIcon from '@/lib/icons/switch-icon';
import { ReactNode } from 'react';

interface DragGhostProps {
  type: string | null;
}

export function DragGhost({type }: DragGhostProps) {
  const { position } = useDnDPosition();

  if (!position || !type) return null;

  const renderPreview=(type : string | null):ReactNode=>{
    switch (type){
      case "andGate":{
        return <AndGateLogo/>
      }
      case "orGate":{
        return <OrGateIcon/>
      }
      case "norGate":{
        return <NorGateIcon/>
      }
      case  "notGate":{
        return <NotGateIcon/>
      }
      case  "switch":{
        return <SwitchIcon/>
      }
    }
  }
  return (
    <div
      className="fixed pointer-events-none z-9999"
      style={{
        left: 0,
        top: 0,
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    >
      {renderPreview(type)}
    </div>
  );
}
