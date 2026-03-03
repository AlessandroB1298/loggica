"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-4xl font-bold mb-2">
          Welcome to the site
        </h1>
        <Button onClick={()=>{
          router.push("/dashboard")
        }} variant={"default"}>
          Dashboard
        </Button>
      </div>
    );
}
