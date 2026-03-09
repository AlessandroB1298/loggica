"use client"
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
  SidebarRail,
} from "@/components/ui/sidebar"
import { Cpu, Projector, UserIcon } from "lucide-react"
import ThemeSwitcher from "./themeSelector"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { gates } from "@/lib/gates"
import { useAtom } from "jotai"
import { nodesAtom } from "@/lib/atom/nodes"
import { OnDropAction, useDnD } from "../context/DnDContext"
import {  useCallback, useState } from "react"
import {  XYPosition } from "@xyflow/react"
import { DragGhost } from "./dragGhost"
import { Button } from "@/components/ui/button"
import { switches } from "@/lib/switches"

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

let id = 0;
const getId = () => `dndnode_${id++}`

export function AppSidebar() {
  const { onDragStart, isDragging } = useDnD();
    // The type of the node that is being dragged.
    const [type, setType] = useState<string | null>(null);

   const [nodes, setNodes] = useAtom(nodesAtom)

    const createAddNewNode = useCallback(
        (nodeType: string): OnDropAction => {
          return ({ position }: { position: XYPosition }) => {
            const newNode = {
              id: getId(),
              type: nodeType,
              position,
              data: { label: `${nodeType} node` },
            };

            setNodes((nds) => nds.concat(newNode));
            setType(null);
          };
        },
        [setNodes, setType],
      );

  return (
    <Sidebar variant="floating" collapsible="offcanvas">
      <SidebarHeader className="flex flex-row gap-4">
        <UserIcon/>
        User
      </SidebarHeader>
      <Separator/>
     <Tabs  defaultValue="projects" className="m-2">
       <TabsList className="flex items-center w-full mt-2 ">
         <TabsTrigger value="projects">
           Projects
         </TabsTrigger>
         <TabsTrigger value="logic">
            Logic
         </TabsTrigger>
       </TabsList>
       <TabsContent value="projects">
         <SidebarContent className="flex items-center w-auto mt-2">
           <SidebarGroup>
             <SidebarGroupLabel>
               Projects
             </SidebarGroupLabel>
             {projects.map((project) => (
                <SidebarMenuItem key={project.projectName}>
                  <SidebarMenuButton asChild>
                    <div className="w-full" >
                      <Projector />
                      <span>{project.projectName}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
           </SidebarGroup>
         </SidebarContent>
       </TabsContent>
       <TabsContent value="logic">
         <SidebarContent className="flex z-50 items-center flex-wrap w-full mt-2">
           <SidebarGroup>
             <SidebarGroupLabel>
               Switches
             </SidebarGroupLabel>
             {isDragging && <DragGhost type={type} />}
             {switches.map((sw) => {
               const Icon = sw.icon;
               return(
                 <SidebarMenuItem key={sw.type}>
                   <SidebarMenuButton className="w-full" asChild>
                     <div
                       onPointerDown={(event) => {
                         setType(sw.type);
                         onDragStart(event, createAddNewNode(sw.type));
                       }}
                       className="cursor-grab">
                       <Icon/>
                       {sw.name.split(" ")[0].toUpperCase()}
                     </div>
                   </SidebarMenuButton>
                 </SidebarMenuItem>
               )
             })}
           </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>
                  Logical Gates
                </SidebarGroupLabel>
                 {isDragging && <DragGhost type={type} />}
                  {gates.map((gate) => {
                    const Icon = gate.icon;
                    return(
                      <SidebarMenuItem key={gate.name}>
                        <SidebarMenuButton className="w-full" asChild>
                          <div
                            onPointerDown={(event) => {
                              setType(gate.type);
                              onDragStart(event, createAddNewNode(gate.type));
                            }}
                            className="cursor-grab">
                            <Icon/>
                            {gate.name.split(" ")[0].toUpperCase()}
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>
                  Your Integrated Circuits
                </SidebarGroupLabel>
                <SidebarMenuItem className="flex flex-row gap-2">
                  {Array.from([1,2,3]).map((index)=>(
                    <Button variant={"default"} className="w/1-2 hover:cursor-pointer"  key={index + 1}>
                      <Cpu  size={24}/>
                    </Button>
                  ))}
                </SidebarMenuItem>
              </SidebarGroup>
          </SidebarContent>
       </TabsContent>
     </Tabs>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>
            Theme
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <ThemeSwitcher/>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
      <SidebarRail/>
    </Sidebar>
  )
}
