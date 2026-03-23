import { memo, useCallback } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ChevronRight, Projector } from "lucide-react";
import { projects } from "@/lib/constants/projects";
import { VersionSwitcher } from "./sidebarHeader";
import { gates } from "@/lib/utils/types/gates";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { switches } from "@/lib/utils/types/switches";
import { outputs } from "@/lib/utils/types/outputs";
import { useDnD } from "@/app/context/DnDContext";
import { useState } from "react";
import { useSetAtom } from "jotai";
import { onCreateNewNode } from "@/lib/atom/nodes";
import { XYPosition } from "@xyflow/react";
import { DragGhost } from "../dragGhost";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";

export const RelaxedSidebar = memo(function SideBar() {
  const { theme } = useTheme();
  const color = theme === "dark" ? "white" : "black";
  const { onDragStart, isDragging } = useDnD();
  const [type, setType] = useState<string | null>(null);
  const createNewNode = useSetAtom(onCreateNewNode);
  const SWITCHES_ID = "collapsible-switches";
  const addNewNode = useCallback(
    (nodeType: string) =>
      ({ position }: { position: XYPosition }) => {
        createNewNode({ nodeType, position });
      },
    [createNewNode],
  );

  return (
    <Sidebar variant="floating" collapsible="offcanvas">
      <SidebarHeader className="flex flex-row gap-2 items-center">
        <VersionSwitcher />
      </SidebarHeader>
      <Separator />
      <SidebarContent className="flex items-center w-auto mt-2">
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          {projects.map((project) => (
            <SidebarMenuItem key={project.projectName}>
              <SidebarMenuButton asChild>
                <div className="w-full">
                  <Projector />
                  <span>{project.projectName}</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Nodes</SidebarGroupLabel>
          {isDragging && <DragGhost type={type} />}
          <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip="Switches"
                    aria-controls={SWITCHES_ID}
                  >
                    <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    <span>Switches</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent id={SWITCHES_ID}>
                  <SidebarMenuSub>
                    {switches.map((sw) => (
                      <SidebarMenuSubItem key={sw.name}>
                        <SidebarMenuSubButton asChild>
                          <div
                            onPointerDown={(e) =>
                              onDragStart(e, addNewNode(sw.type))
                            }
                            className="cursor-grab flex items-center gap-2 w-full"
                          >
                            <sw.icon />
                            <span>{sw.name}</span>
                          </div>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>

            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip="Switches"
                    aria-controls={SWITCHES_ID}
                  >
                    <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    <span>Outputs</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent id={SWITCHES_ID}>
                  <SidebarMenuSub>
                    {outputs.map((out) => (
                      <SidebarMenuSubItem key={out.name}>
                        <SidebarMenuSubButton asChild>
                          <div
                            onPointerDown={(e) =>
                              onDragStart(e, addNewNode(out.type))
                            }
                            className="cursor-grab flex items-center gap-2 w-full"
                          >
                            <out.icon />
                          </div>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>

            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip="Switches"
                    aria-controls={SWITCHES_ID}
                  >
                    <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    <span>Gates</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent id={SWITCHES_ID}>
                  <SidebarMenuSub>
                    {gates.map((gate) => (
                      <SidebarMenuSubItem key={gate.name}>
                        <SidebarMenuSubButton asChild>
                          <div
                            onPointerDown={(e) =>
                              onDragStart(e, addNewNode(gate.type))
                            }
                            className="cursor-grab flex items-center gap-2 w-full"
                          >
                            <gate.icon />
                            {gate.name}
                          </div>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="ml-8">
        <UserButton
          showName
          appearance={{
            elements: {
              userButtonAvatarBox: {
                width: "40px",
                height: "40px",
              },
              userButtonOuterIdentifier: {
                color: color,
              },
            },
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
});
