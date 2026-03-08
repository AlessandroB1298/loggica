import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps, Moon, Sun } from "lucide-react";
type themeType = {
  key: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  label: string;
};
export const themes: themeType[] = [
  {
    key: "dark",
    icon: Moon,
    label: "Dark",
  },
  {
    key: "light",
    icon: Sun,
    label: "Light",
  },
];
