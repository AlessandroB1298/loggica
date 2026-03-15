import { JSX } from "react/jsx-dev-runtime";
import SwitchIcon from "@/lib/icons/switch-icon";
type SwitchProps = {
  name: string;
  icon: () => JSX.Element;
  type: string;
};

export const switches: SwitchProps[] = [
  {
    name: "Lever",
    icon: SwitchIcon,
    type: "switch",
  },
];
