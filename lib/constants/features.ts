//define a type for features

import { Bot, Cable, FileChartColumn, LucideProps } from "lucide-react";

export type featureType = {
  featureName: string;
  featureDesc: string;
  featureIcon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export const featurelist: featureType[] = [
  {
    featureName: "Logic Gates & ICs",
    featureDesc: "Create logic gates and integrated circuits",
    featureIcon: Cable,
  },
  {
    featureName: "AI Integration",
    featureDesc:
      "Assistant for creating, designing, and implementing logical systems",
    featureIcon: Bot,
  },

  {
    featureName: "Diagrams ",
    featureDesc: "Export to industry standard diagrams.",
    featureIcon: FileChartColumn,
  },
];
