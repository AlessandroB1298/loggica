"use client";
import { cn } from "@/lib/utils";
import React, {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  SVGProps,
} from "react";
import AnthropicDark from "./anthropic-dark";
import Gemini from "./gemini";
import DeepSeek from "./deepseek";
import Mistral from "./mistral";

const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8.22 2.72a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 8.5H3.75a.75.75 0 0 1 0-1.5h8.19L8.22 3.78a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

export const BentoGrid: FC<BentoGridProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon?: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
}

export const BentoCard: FC<BentoCardProps> = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl",

      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",

      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      {Icon && (
        <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 dark:text-neutral-300 mb-2" />
      )}

      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
        {name}
      </h3>

      <p className="max-w-lg text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
    </div>

    {href && (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <a
          href={href}
          className="pointer-events-auto text-sm font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 flex items-center"
        >
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </div>
    )}

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

type Feature = {
  Icon: FC<SVGProps<SVGSVGElement>>;
  name: string;
  description: string;
  href: string;
  cta: string;
  className: string;
  background: ReactNode;
};

const features: Feature[] = [
  {
    Icon: AnthropicDark,
    name: "Anthropic",
    description: "",
    href: "#",
    cta: "Learn More",
    className: "lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-amber-100/30 dark:bg-amber-950/20" />
    ),
  },
  {
    Icon: Gemini,
    name: "Gemini",
    description: "",
    href: "#",
    cta: "Learn More",
    className: "lg:col-span-1.5",

    background: (
      <div className="absolute inset-0 bg-green-100/30 dark:bg-green-950/20" />
    ),
  },
  {
    Icon: DeepSeek,
    name: "DeepSeek",
    description: "",
    href: "#",
    cta: "Learn More",
    className: "lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-blue-100/30 dark:bg-blue-950/20" />
    ),
  },
  {
    Icon: Mistral,
    name: "Mistral",
    description: "",
    href: "#",
    cta: "Learn More",
    className: "lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-red-100/30 dark:bg-red-950/20" />
    ),
  },
];

export default function BentoGridCom() {
  return (
    <div className="w-full p-4 sm:p-6 lg:p-8 ">
      <div className="max-w-8xl mx-auto">
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
