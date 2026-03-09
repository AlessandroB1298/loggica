"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold mb-2">Welcome to the site</h1>
      <Link href={"/dashboard/"}>
        <Button onClick={() => { }} variant={"default"}>
          Continue
        </Button>
      </Link>
    </div>
  );
}
