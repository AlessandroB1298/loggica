"use client";

import SpotlightCards from "@/components/kokonutui/spotlight-cards";
import LandingPage from "./components/landingPage/hero";
import NavbarComponent from "@/components/navbar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ReactFlowDemoStatic from "@/components/reactflow-demo";
import BentoGridCom from "@/components/kokonutui/bento-grid";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-full mt-2">
        <NavbarComponent />
      </div>
      <section>
        <LandingPage />
      </section>
      <section className="z-[-10] w-full h-84">
        <ReactFlowDemoStatic />
      </section>
      <section id="features" className="mt-36">
        <Header header="Features" body="Everything You Need" />
        <SpotlightCards />
      </section>
      <section id="integrations" className="w-full mt-36 ">
        <Header header="Integrations" body="AI Integrations" />
        <BentoGridCom />
      </section>
      <footer className="w-full mt-96">
        <Footer />
      </footer>
    </div>
  );
}
