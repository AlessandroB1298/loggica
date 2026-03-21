import { AndGate } from "@/app/components/gates/andGate";
import { NorGate } from "@/app/components/gates/norGate";
import { NotGate } from "@/app/components/gates/notGate";
import { OrGate } from "@/app/components/gates/orGate";
import { LightBulb } from "@/app/components/ouputs/lightBulb";
import { Switch } from "@/app/components/switches/switch";
import { Node } from "@xyflow/react";

export type AppNode = Node<
  { label: string; isOn: boolean },
  "switch" | "andGate" | "orGate" | "norGate" | "notGate"
>;
export const nodeTypes = {
  andGate: AndGate,
  orGate: OrGate,
  norGate: NorGate,
  notGate: NotGate,
  switch: Switch,
  lightBulb: LightBulb,
};
