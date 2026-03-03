import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Projector, UserIcon } from "lucide-react"
import { ThemeSelector } from "./themeSelector"

type proj = {
  projectName : string
}
const projects: proj[]=[
  {projectName : "proj1"},
  {projectName : "proj2"},
  {projectName : "proj3"},
  {projectName : "proj4"},
  {projectName : "proj5"},

]
export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarHeader className="flex flex-row gap-4">
        <UserIcon/>
        User
      </SidebarHeader>
      <Separator/>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Projects
          </SidebarGroupLabel>
          {projects.map((project) => (
             <SidebarMenuItem key={project.projectName}>
               <SidebarMenuButton asChild>
                 <div >
                   <Projector />
                   <span>{project.projectName}</span>
                 </div>
               </SidebarMenuButton>
             </SidebarMenuItem>
           ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>
            Theme
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <ThemeSelector/>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
