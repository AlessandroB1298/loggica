import { Button } from "@/components/ui/button";
import { Cable, Github } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { AuroraText } from "@/components/ui/auoraText";

export default function LandingPage() {
  const mainTextRef = useRef<HTMLDivElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.out" },
      onComplete: () => { },
    });

    tl.fromTo(
      mainTextRef.current,
      { y: 50, opacity: 0 }, // GSAP will override the initial opacity:0 from gsap.set
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: "back.out(1.7)",
        visibility: "visible", // Make visible during animation
      },
    )
      .fromTo(
        subTextRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          visibility: "visible",
        },
        ">-0.4",
      )
      .fromTo(
        buttonRef.current!.children,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.25,
          stagger: 0.1,
          ease: "power2.in",
          visibility: "visible",
        },
        ">-0.1",
      );
  });
  return (
    <main className=" bg-background mb-36">
      <section className="pb-42 z-[9999]">
        <div className="container mx-auto max-w-6xl pt-36">
          <div className="flex flex-col items-center text-center ">
            <div className="z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-primary z-[999]">
              <Cable className="w-4 h-4 text-secondary-foreground" />
              <span className="text-sm font-semibold text-secondary-foreground">
                Build Anytime, Anywhere
              </span>
            </div>
            <h1
              ref={mainTextRef}
              className="text-5xl z-20 md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl text-foreground"
            >
              Welcome to{" "}
              <span>
                <AuroraText>Loggica</AuroraText>{" "}
              </span>
            </h1>
            <p
              ref={subTextRef}
              className="text-lg z-20 md:text-xl text-foreground/80 max-w-2xl text-pretty leading-relaxed"
            >
              Transform how you manage your time with intelligent tools designed
              to help you focus on what truly matters and achieve your goals
              faster.
            </p>

            <div
              ref={buttonRef}
              className="flex flex-col sm:flex-row gap-4 mt-4 z-[9999]"
            >
              <Link href={"/sign-in"}>
                <Button
                  size="lg"
                  className="bg-blue-500 text-primary-foreground hover:bg-blue-500/60 shadow-lg"
                >
                  Get Started Free
                </Button>
              </Link>

              <Link
                target="_blank"
                href="https://github.com/AlessandroB1298/loggica"
              >
                <Button
                  size="lg"
                  variant="default"
                  className="bg-primary border-2 border-secondary text-secondary hover:bg-primary/80 "
                >
                  <div className="flex flex-row gap-2 items-center">
                    <Github />
                    Github
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
