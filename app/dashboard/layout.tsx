import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/sidebar";
import { ThemeSelector } from "../components/themeSelector";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar/>
          <div className="relative top-5 left-5 z-50">
            <SidebarTrigger/>
          </div>
        <main>{children}</main>
      </SidebarProvider>
    </>
  )
}
