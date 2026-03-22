"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactFlowProvider } from "@xyflow/react";
import { DnDProvider } from "../context/DnDContext";
import TopBanner from "../components/topBanner";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactFlowProvider>
          <DnDProvider>
            <SidebarProvider>
              <AppSidebar />
              <div className="fixed top-2 right-4 z-9999">
                <TopBanner />
              </div>
              <main>{children}</main>
            </SidebarProvider>
          </DnDProvider>
        </ReactFlowProvider>
      </QueryClientProvider>
    </>
  );
}
