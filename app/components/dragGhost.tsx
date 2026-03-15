"use client";

import { useDnDPosition } from "@/app/context/DnDContext";

import SwitchIcon from "@/lib/icons/switch-icon";
import { ReactNode } from "react";
import AndGate from "./gates/andGate";
import OrGate from "./gates/orGate";
import NorGate from "./gates/norGate";
import NotGate from "./gates/notGate";

interface DragGhostProps {
  type: string | null;
}

export function DragGhost({ type }: DragGhostProps) {
  const { position } = useDnDPosition();

  if (!position || !type) return null;

  const renderPreview = (type: string | null): ReactNode => {
    switch (type) {
      case "andGate": {
        return <AndGate />;
      }
      case "orGate": {
        return <OrGate />;
      }
      case "norGate": {
        return <NorGate />;
      }
      case "notGate": {
        return <NotGate />;
      }
      case "switch": {
        return <SwitchIcon />;
      }
    }
  };
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
