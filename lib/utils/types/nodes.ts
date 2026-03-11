import AndGate from "@/app/components/gates/andGate";
import NorGate from "@/app/components/gates/norGate";
import NotGate from "@/app/components/gates/notGate";
import OrGate from "@/app/components/gates/orGate";
import Switch from "@/app/components/switches/switch";

export const nodeTypes = {
  andGate: AndGate,
  orGate: OrGate,
  norGate: NorGate,
  notGate: NotGate,
  switch: Switch,
};
