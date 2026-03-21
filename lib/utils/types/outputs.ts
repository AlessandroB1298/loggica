import { JSX } from "react/jsx-dev-runtime";
import LightBulbIcon from "@/lib/icons/light-bulb-icon";
type OutputProps = {
  name: string;
  icon: () => JSX.Element;
  type: string;
};

export const outputs: OutputProps[] = [
  {
    name: "LightBulb",
    icon: LightBulbIcon,
    type: "lightBulb",
  },
];
