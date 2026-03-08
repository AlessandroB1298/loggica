"use client"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactFlowProvider } from "@xyflow/react";
import { DnDProvider } from "../context/DnDContext";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactFlowProvider>
          <DnDProvider>
            <SidebarProvider>
              <AppSidebar/>
              <main>{children}</main>
            </SidebarProvider>
          </DnDProvider>
        </ReactFlowProvider>
      </QueryClientProvider>

    </>
  )
}
