import AndGateIcon from "@/lib/icons/and-gate-icon";
import NorGateIcon from "@/lib/icons/nor-gate-icon";
import NotGateIcon from "@/lib/icons/not-gate-icon";
import OrGateIcon from "@/lib/icons/or-gate-icon";
import { JSX } from "react/jsx-dev-runtime";

export type gate = {
  name: string;
  icon: () => JSX.Element;
  type: string;
};
export const gates: gate[] = [
  {
    name: "And Gate",
    icon: AndGateIcon,
    type: "andGate",
  },
  {
    name: "Nor Gate",
    icon: NorGateIcon,
    type: "norGate",
  },
  {
    name: "Not Gate",
    icon: NotGateIcon,
    type: "notGate",
  },
  {
    name: "Or Gate",
    icon: OrGateIcon,
    type: "orGate",
  },
];
