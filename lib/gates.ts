import AndGateLogo from "./icons/and-gate-icon";
import NorGateIcon from "./icons/nor-gate-icon";
import NotGateIcon from "./icons/not-gate-icon";
import OrGateIcon from "./icons/or-gate-icon";
import { JSX } from "react/jsx-dev-runtime";

type gate = {
  name: string;
  icon: () => JSX.Element;
  type: string;
};
export const gates: gate[] = [
  {
    name: "And Gate",
    icon: AndGateLogo,
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
